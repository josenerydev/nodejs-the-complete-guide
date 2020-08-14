const expect = require("chai").expect;
const sinon = require("sinon");
const mongoose = require("mongoose");

const User = require("../models/user");
const AuthController = require("../controllers/auth");

describe("Auth Controller - Login", function () {
  it("should throw an error if accessing the database fails", function (done) {
    sinon.stub(User, "findOne");
    User.findOne.throws();
    const req = {
      body: {
        email: "test@test.com",
        password: "tester",
      },
    };
    AuthController.login(req, {}, () => {}).then((result) => {
      expect(result).to.be.an("error");
      expect(result).to.have.property("statusCode", 500);
      done();
    });
    User.findOne.restore();
  });

  it("should send a response with a valid user status for an existing user", function (done) {
    mongoose
      .connect(
        "mongodb+srv://josenerydev:EPVtuLrgQIDyeV2W@cluster0.ol3ev.mongodb.net/test-messages?retryWrites=true"
      )
      .then((result) => {
        const user = new User({
          email: "test@test.com",
          password: "tester",
          name: "Test",
          posts: [],
        });
        return user.save();
      })
      .then(() => {})
      .catch((err) => console.log(err));
  });
});

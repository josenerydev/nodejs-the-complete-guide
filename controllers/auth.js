exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.isLoggedId,
  });
};

exports.postLogin = (req, res, next) => {
  req.isLoggedId = true;
  res.redirect("/");
};

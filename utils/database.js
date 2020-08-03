const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://josenerydev:vNwCrCvnB9VOj8FQ@cluster0.ol3ev.mongodb.net/<dbname>?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    callback(client);
  })
  .catch(err => console.log(err));
}


module.exports = mongoConnect;
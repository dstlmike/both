var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://bot:bot@ac-6ymsztq-shard-00-00.lmt2mtk.mongodb.net:27017,ac-6ymsztq-shard-00-01.lmt2mtk.mongodb.net:27017,ac-6ymsztq-shard-00-02.lmt2mtk.mongodb.net:27017/?ssl=true&replicaSet=atlas-9aqeym-shard-0&authSource=admin&retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, client) {

  const collection = client.db("test").collection("devices");

  // perform actions on the collection object

  client.close();

});


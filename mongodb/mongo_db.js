const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/t_ame";
var mongo = new MongoClient(url, {useUnifiedTopology: true});

mongo.connect(function(err, client) {
 if (err) throw err;
 console.log("Database created by t-ame");
});

module.exports = mongo;

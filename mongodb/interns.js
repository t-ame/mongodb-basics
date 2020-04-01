
const client = require('./mongo_db');

setTimeout(function(){
    var db = client.db();
    var collection = db.collection("interns");
    console.log("Interns collection created");
    client.close();
}, 1000);


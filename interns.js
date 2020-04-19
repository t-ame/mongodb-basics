const assert = require('assert');

function createCollections(client) {
    var db = client.db();
    var collection = db.collection("myMovies");
    console.log("myMovies collection created.");
    return collection;
}

function insertDocuments(collection, docs, callback) {
    collection.insertMany(docs, function (err, result) {
        assert.equal(err, null);
        assert.equal(docs.length, result.result.n);
        if (callback)
            callback(result);
    });
}

module.exports = {
    createCollections: createCollections,
    insertDocuments: insertDocuments
};


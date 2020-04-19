const assert = require('assert');

function findFirst(collection, callback) {
    collection.findOne({}, function (err, docs) {
        assert.equal(err, null);
        if (callback)
            callback(docs);

    });
}

function findAll(collection, callback) {
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        if (callback)
            callback(docs);

    });
}

function findByName(collection, movieName, callback) {
    collection.find({ movie: movieName }).toArray(function (err, docs) {
        assert.equal(err, null);
        if (callback)
            callback(docs);

    });
}

function findByRating(collection, rating, callback) {
    collection.find({ rating: rating }).toArray(function (err, docs) {
        assert.equal(err, null);
        if (callback)
            callback(docs);

    });
}

function getMovieNames(collection, callback) {
    collection.find({}).project({ _id: 0, movie: 1 }).toArray(function (err, docs) {
        assert.equal(err, null);
        if (callback)
            callback(docs);

    });
}

module.exports = {
    findFirst: findFirst,
    findAll: findAll,
    findByName: findByName,
    findByRating: findByRating,
    getMovieNames: getMovieNames
};
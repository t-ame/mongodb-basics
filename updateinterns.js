const assert = require('assert');

function updateFirstMovieByName(collection, movieName, newMovie, callback) {
    collection.updateOne({ movie: movieName }, { $set: newMovie }, function (err, res) {
        assert.equal(err, null);
        if (callback)
            callback();

    });
}

module.exports = {
    updateFirstMovieByName: updateFirstMovieByName
};
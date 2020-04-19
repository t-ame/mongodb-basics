const interns = require('./interns');
const findInterns = require('./findinterns');
const updateInterns = require('./updateinterns');
const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/t_ame";
var mongo = new MongoClient(url, { useUnifiedTopology: true });

mongo.connect(function (err, client) {
    if (err) throw err;
    console.log("Database created by t-ame");

    //CREATING myMOVIES COLLECTION
    let internCollection = interns.createCollections(client);

    //INSERTING MOVIE DOCUMENTS
    interns.insertDocuments(internCollection,
        [
            { movie: "The Banker", year: "2020", rating: 8 },
            { movie: "Bad Boys", year: "2020", rating: 7 },
            { movie: "The Hunt", year: "2020", rating: 7 },
            { movie: "Bloodshot", year: "2020", rating: 7.5 },
            { movie: "First Cow", year: "2020", rating: 6.5 }
        ], (result) => console.log(result));

    //FINDING MOVIES BY DIFFERENT PARAMETERS
    findInterns.findFirst(internCollection, (result) => console.log("First movie:", result));
    findInterns.findByRating(internCollection, 7, (result) => console.log("Movies with rating, 7:", result));
    findInterns.getMovieNames(internCollection, (result) => console.log("Movie names only:", result));

    //UPDATING MOVIES
    updateInterns.updateFirstMovieByName(internCollection, "The Banker", { movie: "The Undisputables", year: "2011", rating: 4.5 },
        () => findInterns.findAll(internCollection, (result) => console.log("Collection after update:", result)));


    //CLOSING DATABASE AFTER SUFFICIENT TIME
    setTimeout(() => client.close(), 15000);
});





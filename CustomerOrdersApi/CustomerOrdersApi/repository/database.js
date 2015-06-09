(function (database) {

    var mongoDb = require('mongodb');
    var connectionString = "mongodb://localhost:27017/test";
    var mymongo = null;
    
    database.getDbHandle = function (next) {

        if (!mymongo) {
            mongoDb.MongoClient.connect(connectionString, function (err, db) {
                console.log("BOBO > " + err);
                if (err) {
                    next(err, null);
                }
                else {
                    mymongo = db;
                    next(null, mymongo);
                }
            });
        }
        else {
            next(null, mymongo);
        }
    };

})(module.exports);
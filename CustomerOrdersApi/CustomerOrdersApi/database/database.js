(function (database) {

    var mongoDb = require('mongodb');
    var connectionString = "mongodb://localhost:27017/test";
    var mymongo = null;
    
    database.getDbHandle = function (next) {

        if (!mymongo) {
            console.log('>> before');
            mongoDb.MongoClient.connect(connectionString, function (err, db) {
                console.log(db);
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
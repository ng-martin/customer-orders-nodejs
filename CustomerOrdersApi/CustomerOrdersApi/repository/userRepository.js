(function (userRepository) {
    
    var database = require('./database.js');
    var userModel = require('../models').user;

    userRepository.getById = function (id, callback) {

        database.getDbHandle(function (err, db) {
            if (err) {
                callback(err, null);
            } else {
                db.collection('users').find({ userid: id }).nextObject(function (err, user) {
                    if (user === null) {
                        callback(null, null);
                    } else {                        
                        var obj = new userModel();
                        obj.id = user.userid;
                        obj.username = user.username;
                        obj.firstname = user.firstname;
                        obj.lastname = user.lastname;
                        callback(null, obj);
                    }
                });
            }
        });
    };

})(module.exports);
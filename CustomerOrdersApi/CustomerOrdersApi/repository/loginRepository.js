(function (loginRepository) {

    var database = require('./database.js');
    
    var tokenGenerator = function (username) {
        return "abcdefghijklmnop";
    };
    
    loginRepository.validateUser = function (username, password, callback) {
        
        database.getDbHandle(function (err, db) {
            if (err) {
                callback(err, null);
            } else {
                db.collection('users').find({ username: username, password: password }).nextObject(function (err, user) {
                    if (user === null) {
                        callback(null, { token: null });
                    } else {
                        // use a mechanism to create and save token
                        var userToken = tokenGenerator(username);
                        callback(null, { token: userToken, id: user.userid });
                    }   
                });
            }
        });
    };

    loginRepository.hasAccess = function (username, groupId, callback) {

        database.getDbHandle(function (err, db) {
            if (err) {
                callback(err, null);
            } else {
                db.collection('userGroups').find({ username: username, groupId: groupId }).count(function (err, count) {
                    callback(null, { hasAccess: count === 0 });
                });
            }
        });

    };

})(module.exports);
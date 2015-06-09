
(function (orderService) {
    
    var database = require('../repository/database');
    var bson = require('mongodb').pure().BSON;

    orderService.update = function (customerId, next) {

        database.getDbHandle(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                var objectId = new bson.ObjectID(customerId);
                db.collection('customers').find({ '_id': objectId }).nextObject(function (err, customer) {
                    if (err) {
                        next(err, null);
                    } else {
                        if (customer === null) {
                            next('Customer ID not found', null);
                        } else {
                            customer
                        }
                        next(null, customer);
                    }
                });
            }

        });
    };

})(module.exports);
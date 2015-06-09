(function (customerService) {

    var customersRepository = require('../repository/customersRepository');
    var database = require('../repository/database');

    customerService.getById = function (id, next) {
      
        database.getDbHandle(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.collection('customers').find({ id: parseInt(id) }).nextObject(function (err, customer) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, customer);
                    }
                });
            }
        });
    };

    customerService.getAll = function (next) {
        database.getDbHandle(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.collection("customers").find().toArray(function (err, customers) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, customers);
                    }
                });
            }
        });
    };

    customerService.insertCustomer = function (customerName, next) {
        database.getDbHandle(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                var customer = {
                    id: 99,
                    name: customerName,
                    age: 100,
                    orders: []
                };

                db.collection("customers").insert(customer, function (err, records) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, records);
                    }
                });
            }
        });
    };

    customerService.insertCustomerV2 = function (customer, next) {
        
        database.getDbHandle(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.collection("customers").insert(customer, function (err, records) {
                    if (err) {
                        next(err, null);
                    } else {
                        console.log("MMMMMMMMMM >> " + records);
                        next(null, records);
                    }
                });
            }
        });
    };

})(module.exports);
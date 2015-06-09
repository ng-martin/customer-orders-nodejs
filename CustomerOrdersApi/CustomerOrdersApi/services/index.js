(function (services) {
    
    var customerService = require('./customerService.js');

    services.getCustomerById = function (id, next) {  
        customerService.getById(id, next);
    };

    services.getAll = function (next){
        customerService.getAll(function (err, result) {
            if (err) {
                next(err, null);
            } else {
                next(null, result);
            }
        });
    }

    services.insertCustomer = function (name, next) {
        customerService.insertCustomer(name, function (err, records) {
            if (err) {
                next(err, null);
            } else {
                next(null, records);
            }
        });
    };

    services.insertCustomerV2 = function (newCustomer, next) {
        //var customer = {
        //    name: name,
        //    age: age,
        //    orders: []
        //};
        customerService.insertCustomerV2(newCustomer, function (err, result) {
            if (err) {
                next(err, null);
            } else {
                var jso = result.toJSON();
                if (jso.ok === 1) {
                    customerService.getById(newCustomer.id, next);
                } else {                    
                    next(null, { error: "Customer details could not be saved." });
                }
            }
        });
    };

})(module.exports);
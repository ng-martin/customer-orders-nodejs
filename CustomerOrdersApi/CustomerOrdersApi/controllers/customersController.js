(function (customersController) {

    var services = require('../services');

    customersController.init = function (app) {
       
        app.route('/customers')
        .get(function (req, res) {
            services.getAll(function (err, result) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(result);
                }
            });
        })
        .post(function (req, res) {
            console.log(req.body);
            services.insertCustomerV2(req.body, function (err, records) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).json(records);
                }
            });
        });

        //app.get('/customers', function (req, res) {
        //    res.set('content-type', 'application/json');
        //    services.getAll(function (err, result) {
        //        if (err) {
        //            res.send(err);
        //        } else {
        //            res.send(result);
        //        }
        //    });            
        //});
        
        app.get('/customers/:id', function (req, res) {
            var id = req.params.id;
            
            services.getCustomerById(id, function (err, customer) {
                if (err) {
                    console.log(">> ERROR: " + err);
                    res.set('content-type', 'plain/text');
                    res.send("An error occurred while processing this data");
                } else {
                    console.log("=====================" + customer);
                    res.send(customer);
                }
            });                    
            
        });

        app.get('/customer/:name', function (req, res) {
            var name = req.params.name;
            services.insertCustomer(name, function (err, records) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.set('content-type', 'application/json');
                    res.status(200).send(records);
                }
            });

        });

        app.post('/api/customer', function (req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req);
            console.log(req.body);
            console.log(req.body.firstname);
            services.insertCustomerV2(req.body, function (err, records) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.set('content-type', 'application/json');
                    res.status(200).send(records);
                }
            });
        });
                
    };

})(module.exports);
(function (controllers) {

    var customersController = require('./CustomersController');
    var loginController = require('./loginController.js');

    controllers.init = function (app) {
        
        app.get('/', function (req, res) {
            res.redirect('login');
        });
        
        loginController.init(app);
        customersController.init(app);
        
    };

})(module.exports);
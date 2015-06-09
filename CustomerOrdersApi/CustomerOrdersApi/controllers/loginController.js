(function (loginController) {

    var loginService = require('../services/loginService');
    var userService = require('../services/userService');

    loginController.init = function (app) {
        
        var loginModel = {
            title: 'Welcome to Login page',
            username: '',
            error: ''  };

        app.route('/login')
        .get(function (req, res) {
            loginModel.error = '';
            res.render('login', { data: loginModel });
        })
        .post(function (req, res) {
            var username = req.body.username;
            var password = req.body.password;
            // validate inputs
            loginService.validateUser(username, password, function (err, result) {
                if (err) {
                    res.status(400).render('error', { error: 'Invalid error'});
                } else {
                    if (result.token === null) {
                        loginModel.error = "Invalid username or password";
                        res.render('login', { data: loginModel });
                    } else {
                        userService.getById(result.id, function (err, userData) {
                            if (err) {
                                res.status(400).render('error', {});                                
                            } else {
                                userData.token = result.token;
                                res.render('secure/index', { data: userData });
                            }                            
                        });                        
                    }
                }
            });
        });
    };

})(module.exports);
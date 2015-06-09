(function (loginService) {

    var loginRepository = require('../repository/loginRepository.js');

    loginService.validateUser = function (username, password, callback) {
        loginRepository.validateUser(username, password, callback);
    };

    loginService.hasGroupAccess = function (username, groupId, callback) {
        loginService.hasGroupAccess(username, groupId, callback);
    };

})(module.exports);
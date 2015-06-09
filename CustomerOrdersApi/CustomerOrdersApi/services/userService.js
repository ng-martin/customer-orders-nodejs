(function (userService) {

    var userRespository = require('../repository/userRepository.js');

    userService.getById = function (id, callback) {
        userRespository.getById(id, callback);
    };

})(module.exports);
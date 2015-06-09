(function (customerController){
    
    this.greetings = "Hello ";
    customerController = function () {
        this.greetings += "...Martin";
    };

    customerController.messageOfTheDay = 'Hello Martin this is your message';

    customerController.getMessageOfTheDay = function () {
        return "LOLO";
    };

})(module.exports);
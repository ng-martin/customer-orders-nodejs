(function (customersRepository) {

    var customers = [
        {
            id: 1,
            name: 'Martin Anaya',
            age: 30,
            dateOfBirth: '17/11/1984'
        }, {
            id: 2,
            name: 'Lisa Chetcuti',
            age: 30,
            dateOfBirth: '17/11/1998'
        }, {
            id: 3,
            name: 'Luis Yonel Tello',
            age: 29,
            dateOfBirth: '17/11/1990'
        }
    ];

    customersRepository.getAll = function () {
        return customers;
    };

})(module.exports);
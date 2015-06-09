var http = require('http'),
    port = process.env.port || 1337,
    express = require('express'),
    bodyParser = require('body-parser'); 

var app = express();

app.set('view engines', 'vash');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var controllers = require('./controllers');

controllers.init(app);

http.createServer(app).listen(port);
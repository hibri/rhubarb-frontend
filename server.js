
const express = require('express');
var path = require('path');  

var status = require('./app/status');
var index = require('./app/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'pug');


app.use('/health', status);
app.use('/', index);

var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
   console.log('Listening on port ' +port );
});

module.exports = { 
    app: app, 
    server: server 
}; //for testing

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var app = express();

app.set('port',3000);
app.set('views',path.join(__dirname,'views'));


app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'static')));

// send app to router
require('./router')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var express = require('express');
var bodyParser = require('body-parser');
//var logger = require('morgan');
var fs = require('fs');
// Create Express App Object \\
var app = express();

// Application Configuration \\

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));




// Routes \\
app.get('/', function(req, res){
  //res.send('Hello');
  res.header('Content-Type', 'text/html');
  res.sendFile('index.html', {root: '.'});
  //res.sendFile('data.txt', {root: '.'})
//fs.readFile('data.txt', function(err, data){
//    res.header('Content-Type', 'text/html'); 
//    res.send(data);
//    });
});

app.post('/createuser', function(req, res) {
    res.redirect('/SUCCESS');
    console.log(req.body);
});

app.get('/SUCCESS', function(req, res){
    res.send('SUCCESS');
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
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
app.get('/', function (req, res) {
  //res.send('Hello');
  res.header('Content-Type', 'text/html');
  res.sendFile('index.html', { root: '.' });
  //res.sendFile('data.txt', {root: '.'})
  //fs.readFile('data.txt', function(err, data){
  //    res.header('Content-Type', 'text/html'); 
  //    res.send(data);
  //    });
});

app.post('/createSplit', function (req, res) {
  var num1 = req.body.numberToSplit;
  var num2 = req.body.numSplit;
  //num1 split turns into an array of string elements.
  //then gives the array to .map and .map will iterate thru
  // each element using parseInt(c) and return each element 
  //and turn each one into a number.  Final Output num3 = [ array of numbers]  
  var num3 = num1.split("").map(function (c) {
    return parseInt(c);
  });
  //Here is the for loop to achieve the same result as the above code.  
  //   for (var i = 0; i < num1.length; i++) {
  //     if (i < num1.length-1) {
  //    num3 += num1[i] + ", ";
  //     } else{
  //       num3 += num1[i];
  //     }
  //    console.log (num1.charAt(i));
  //  }
  //  num3 = JSON.parse("[" + num3 + "]");
  function chunk(num2, num3) {
    var chunkedArray = [];
    var arr = [];
    //determine adding extra element to lower arrays
    var remainder = num3.length % num2;
    //determine size of chunks
    var arrNum = Math.floor(num3.length / num2);
    console.log("input # " + arrNum + " R : " + remainder);
    //loop through with num2 (arrays to build)
    for (i = 0; i < num2; i++) {
      console.log("loop " +i);
      if (remainder > 0) {
        remainder--;
      //splice the array at el 0 to size of chunk add remainder to lower array
      arr[i] = num3.splice(0, arrNum);
      console.log("this is the " + i + "array" + arr[i] );
      //push dynamic array to master array
      chunkedArray.push(arr[i]);
      console.log("remainder left " + remainder);
      console.log("last i " + i);
      } else {
        console.log("num2 : " + arrNum);
        //if no remainder then add array to master array
        arr[i] = num3.splice(0, arrNum-1);
        console.log("this is the " + i + "array" + arr[i] );
        chunkedArray.push(arr[i]);
      }
    }  
    
    console.log(chunkedArray);
    //console.log(num3);
  }
  chunk(num2, num3);
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function () {
  console.log('Server running on port ' + port);

});
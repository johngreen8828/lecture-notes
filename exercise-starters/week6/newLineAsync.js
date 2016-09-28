var fs = require('fs');
var fileToRead = process.argv[2];
fs.readFile(fileToRead, {encoding:'utf-8'}, function (err, data){
//console.log(data);
var lines = data.split('\n').length;
console.log(lines - 1);
});
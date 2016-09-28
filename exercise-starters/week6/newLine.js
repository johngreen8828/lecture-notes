var fs = require('fs');
var fileToRead = process.argv[2];
var str = fs.readFileSync(fileToRead).toString();

//console.log(buffer.toString());
var lines = str.split('\n').length;

console.log(lines-1);
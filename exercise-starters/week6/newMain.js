// console.log(process.argv);
  var a = 0;
  var b = 0;
  var c = 0;
  var addArray = [ 'node', '/path/to/your/program.js', a, b, c ];



var addFunction = function(addArray) {
    //console.log("1: ", addArray);
    var sum = 0;
    for (var i = 2; i < addArray.length; i ++) {
        sum = sum + parseInt(addArray[i]) ;
        //console.log(i, ": ", sum);
    }
    return sum;
};

console.log(addFunction(process.argv)); 
//console.log(process.argv);
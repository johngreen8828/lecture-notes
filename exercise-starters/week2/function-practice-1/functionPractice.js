function tripleFive () {
    for (var i = 0; i < 3; i++) {
        document.write("Five!");
    }
}

function lastLetter () {

        lastLetter('hello');
        lastLetter("island");
}

function square (num) {
    square(num);
    alert(`Your number squared is ${num}`);
}

 function negate (num1) {
     negate(num1);
     alert(`Your number negated is ${num1}`);
 }
 
 function toArray (a, b, c) {
     var w = toArray(a, b, c);
     alert(`Your array looks like this ${w}`);
 }
 
 function startsWithA(str){
     if (str.charAt(0) === 'a' || str.charAt(0) === 'A') {
         prompt("Your word does start with A");
     } else {
         prompt("Your word did not start with an A")
     }
 }
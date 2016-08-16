
var userInput = prompt("Please Enter another word!");
var stringHolder = userInput;

/*

do while (userInput != null && userInput != ""); {
    userInput = prompt("Please Enter another word or press Cancel if you are done!");
    stringHolder += " " + userInput;
}  
*/
document.write(`You entered the word: ${stringHolder} <br>`);
document.write(`This is the third letter in the word: ${stringHolder.charAt(2)} <br>`);
document.write(`This is the word in upper case: ${stringHolder.toUpperCase()} <br>`);
document.write(`This is the word in lower case: ${stringHolder.toLowerCase()} <br>`);
document.write(`This is the word in sentence: This is the last ${stringHolder} way to go! <br>`);
document.write(`This is the substring second to the fourth characters: ${stringHolder.substring(1,3)} `);
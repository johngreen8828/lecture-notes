var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

function lumFunction() {
    luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luminosity > 155) {
        return "light";
    } else {
        return "dark";
    }
};
var lightness = lumFunction();
//console.log(lightness);
module.exports = {lightness:lightness}
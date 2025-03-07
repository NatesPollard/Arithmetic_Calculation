
// Exporting the functions to be used in the main file
// The functions are defined in this file and exported to be used in the main file


function sum(a, b) {
    a = parseInt (a);
    b = parseInt (b);
    return a + b;
}

function sub(a, b) {
    a = parseInt (a);
    b = parseInt (b);
    return a - b;
}

function mul(a, b) {
    a = parseInt (a);
    b = parseInt (b);
    return a * b;
}

function div(a, b) {
    a = parseInt (a);
    b = parseInt (b);
    return a / b;
}

// Exporting the functions to be used in the main file
module.exports = {sum, sub, mul, div};

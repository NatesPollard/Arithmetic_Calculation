
// Exporting the functions to be used in the main file
// The functions are defined in this file and exported to be used in the main file


function sum(a, b) {
    a = parseFloat (a);
    b = parseFloat (b);
    return a + b;
}

function sub(a, b) {
    a = parseFloat (a);
    b = parseFloat (b);
    return a - b;
}

function mul(a, b) {
    a = parseFloat (a);
    b = parseFloat (b);
    return a * b;
}

function div(a, b) {
    a = parseFloat (a);
    b = parseFloat (b);
    return a / b;
}


module.exports = {sum, sub, mul, div};

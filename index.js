var allowed_characters = [0,1,2,3,4,5,6,7,8,9, '+', '-', '*', '/']
var decimalAdded = false

function display(char){
    document.getElementById("display").value += char;
}

function math(){
    var result = document.getElementById("display").value;
    result = eval(result);
    result = checkZeroDivision(result)
    display(result)
}

function cleanDisplay() {
     document.getElementById("display").value = "";
     decimalAdded = false;
}

function delOne() {
    var result = document.getElementById("display").value;
    result = result.slice(0, -1);
    document.getElementById("display").value = result;
}

function checkZeroDivision(result) {
    if (result === Infinity || result === NaN || result === -Infinity) {
        return " = You got zero divisioned!"
    } else {
        return ' = ' + result
    }
}
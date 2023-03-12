function add(){
    var num1 = Number(document.getElementById("value1").value);
    var num2 = Number(document.getElementById("value2").value);

    var sum = num1 + num2;

    document.getElementById("result").innerHTML = num1 + " plus " + num2 + " is <span class='bold'>" + sum + "</span>.";

    return sum;
}

function subtract(){
    var num1 = Number(document.getElementById("value1").value);
    var num2 = Number(document.getElementById("value2").value);

    var difference = num1 - num2;

    document.getElementById("result").innerHTML = num1 + " minus " + num2 + " is <span class='bold'>" + difference + "</span>.";

    return difference;
}

function multiply(){
    var num1 = Number(document.getElementById("value1").value);
    var num2 = Number(document.getElementById("value2").value);

    var product = num1 * num2;

    document.getElementById("result").innerHTML = num1 + " times " + num2 + " is <span class='bold'>" + product + "</span>.";

    return product;
}

function divide(){
    var num1 = Number(document.getElementById("value1").value);
    var num2 = Number(document.getElementById("value2").value);

    var quotient = num1 / num2;

    document.getElementById("result").innerHTML = num1 + " divided by " + num2 + " is <span class='bold'>" + quotient + "</span>.";

    return quotient;
}

function mod(){
    var num1 = Number(document.getElementById("value1").value);
    var num2 = Number(document.getElementById("value2").value);

    var modulus = num1 % num2;

    document.getElementById("result").innerHTML = num1 + " mod " + num2 + " is <span class='bold'>" + modulus + "</span>.";

    return modulus;
}
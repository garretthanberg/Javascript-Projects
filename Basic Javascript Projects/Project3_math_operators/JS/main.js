function add() {
    var a = 10 + 20; //THIS FUNCTION ALLOWS US TO ADD OUR NUMBERS TOGETHER
    document.getElementById("Math1").innerHTML = "10 + 20 = " + a;
}

function sub() {
    var b = 99 - 37; //THIS FUNCTION ALLOWS US TO SUBTRACT OUR NUMBERS FROM EACH OTHER
    document.getElementById("Math2").innerHTML = "99 - 37 = " + b;
}

function mult() {
    var c = 88 * 4; //THIS FUNCTION ALLOWS US TO MULTIPLY OUR NUMBERS TOGETHER
    document.getElementById("Math3").innerHTML = "88 * 4 = " + c;
}

function div() {
    var d = 49 / 7; //THIS FUNCTION ALLOWS US TO DIVIDE OUR NUMBERS FROM EACH OTHER
    document.getElementById("Math4").innerHTML = "49 / 7 = " + d;
}

function more() {
    var e = (42 + 59) * 5 / 8 - 2; //THIS FUNCTION ALLOWS US TO IMPEMENT MULTPLE FORMS OF MATH INTO ONE EQUATION
    document.getElementById("Math5").innerHTML = "(42 + 49) * 5 / 8 - 2 = " + e;
}

function mod() {
    var f = 5603 % 6; //THIS FUNCTION ALLOWS US TO FIND OUT THE REMAINDER (MODULUS) OF OUR DIVISION
    document.getElementById("Math6").innerHTML = "5603 / 6 has a remainder of: " + f;
}

function neg() {
    var g = 777; //THIS IS A UNARY OPERATOR FUNCTION CALLED A NEGATION OPERATOR - CHANGING TO THE OPPOSITE OR NEGATIVE FORM OF SOMETHING
    document.getElementById("Math7").innerHTML = "The answer is: " + -g;
}

function inc() {
    var h = 78; //THIS FUNCTION ALLOWS US TO INCREMENT OUR NUMBER BY 1
    h++;
    document.getElementById("Math8").innerHTML = "The answer is: " + h;
}

function dec() {
    var i = 65; //THIS FUNCTION ALLOWS US TO DECREMENT OUR NUMBER BY 1
    i--;
    document.getElementById("Math9").innerHTML = "The answer is: " + i;
}

window.alert(Math.random() * 100); //THIS DISPLAYS A WINDOW ALERT WITH A RANDOM NUMBER BETWEEN 0 - 100

function rou() {
    var j = 47.78;
    document.getElementById("Math10").innerHTML = "The answer is: " + Math.round(j); //HERE I AM USING THE JAVASCRIPT MATH OBJECT PROPERTY (ROUND)
    //IN ORDER TO ROUND MY NUMBER TO THE NEAREST INTEGER
}
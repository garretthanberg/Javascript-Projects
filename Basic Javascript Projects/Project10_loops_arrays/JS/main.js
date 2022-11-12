function callLoop() { //THIS IS AN EXAMPLE OF A "WHILE LOOP."
    var Digit = ""; //THIS WILL DISPLAY 1-10 ONCE THE BUTTON HAS BEEN CLICKED.
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Bands = ["Boston", "America", "Europe", "The Rolling Stones", "U2", "Journey"];
var Content = ""; //THIS IS AN EXAMPLE OF A "FOR LOOP" WITH AN ARRAY.
var Y; //THIS WILL DISPLAY ALL BAND NAMES WHEN THE BUTTON IS CLICKED.
function callLoop2() {
    for (Y = 0; Y < Bands.length; Y++) {
        Content += Bands[Y] + "<br>";
    }
    document.getElementById("bandList").innerHTML = Content;
}

function array() {
    var Name = []; //THIS IS ANOTHER ARRAY WITH NAMES.
    Name[0] = "Garrett"; //WHEN THE BUTTON IS PRESSED IT WILL DISPLAY THE NAME AT INDEX #2.
    Name[1] = "Aliza";
    Name[2] = "Abel";
    Name[3] = "Alexie";
    Name[4] = "Ryan";
    document.getElementById("Array").innerHTML = "This person\'s name is " +
        Name[2] + ".";
}

function constant() { //THIS IS AN EXAMPLE OF USING A CONSTANT (A VARIABLE THAT CANNON CHANGE).
    const Camera = {type: "EOS 60D DSLR", brand: "Canon", color:"black"};
    Camera.color = "blue";
    Camera.price = "$1599.00";
    document.getElementById("Constant").innerHTML = "The Camera is a " + Camera.color + " " + Camera.brand + " " + Camera.type + ", they are currently priced at " + Camera.price;
}

function block() { //THIS FUNCTION WILL DISPLAY 600, ONCE THE BUTTON IS CLICKED.
    let X = 600;
    document.getElementById("block").innerHTML = X;
}

function Return(name) { //THIS FUNCTION WILL DISPLAY, "HELLO, MY NAME IS GARRETT!", IN THE BROWSER.
    return "Hello, my name is " + name + "!";
}

document.getElementById("return").innerHTML = Return("Garrett");

let car = { //THIS IS AN EXAMPLE OF CREATING AN OBJECT WITH PROPERTIES AND A METHOD.
    make: "Porsche ", //THIS WILL DISPLAY, "THE CAR IS A 2021 GREEN PORSCHE GT3 RS", IN THE BROWSER.
    model: "GT3 RS ",
    year: "2021 ",
    color: "Green ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car").innerHTML = car.description();

function breakStatement() { //THIS IS AN EXAMPLE OF A BREAK STATEMENT. WHICH WILL STOP DISPLAYING 1-12 AT 3, AS THE BREAK IS AT 4.
    text = "";
    for (let i = 0; i < 12; i++) {
    if (i === 4) { break; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continueStatement() { //THIS IS AN EXAMPLE OF A CONTINUE STATEMENT. THIS EXAMPLE WILL SKIP THE VALUE OF 4.
    text = "";
    for (let i = 0; i < 12; i++) {
        if (i === 4) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;  
}
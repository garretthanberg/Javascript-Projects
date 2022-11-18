function getReceipt() {
    //THIS INITIALIZES OUR STRING SO IT CAN GET PASSED FROM
    //FUNCTION TO FUNCTION, GROWING LINE BY LINE INTO A FULL RECEIPT
    var text1 = "<h3>You Ordered:<h3>"; //THIS TEXT WILL BE DISPLAYED AT THE END WITH ALL ITEMS ORDERED
    var runningTotal = 0; //THIS STARTS AT 0 AND WILL BE OUR TOTAL PRICE AT THE END
    var sizeTotal = 0; //THIS IS THE PRICE FOR THE SIZE OF THE PIZZA
    var sizeArray = document.getElementsByClassName("size"); //THIS LOCATES THE PIZZA SIZES IN THE HTML FILE
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; //THIS FOR LOOP LOOKS FOR THE CHECKED PIZZA SIZE
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //THIS SETS PRICES FOR PIZZA SIZES
        sizeTotal = 8;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 18;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 22;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal+".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //THESE VARIABLES WILL GET PASSED ON TO EACH FUNCTION
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0; //TOPPING PRICE STARTS AT 0
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //THIS FOR LOOP LOOKS FOR TOPPINGS THAT HAVE A CHECK MARK
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); //TOPPING PRICE STARTS AT 0 WITH FIRST TOPPING BEING FREE
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + 
        runningTotal + ".00" + "</strong></h3>";
}
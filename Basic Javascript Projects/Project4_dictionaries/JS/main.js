function my_Dictionary() { //Here I have created my dictionary function
    var Airplane = { //I then created the variable Airplane
        Color:"White", //I then go on to declare some key-value pairs for an airplane
        Year: 1997,
        Length: "160 feet",
        Engine: "Turbofans"
    };
    delete Airplane.Year; //Here I have created a delete statement to removes the key-value pair for the Airplane year
    document.getElementById("Dictionary").innerHTML = "Our airplane was manufactured in " + Airplane.Year; //Since I deleted the key-value pair for the Airplane year
    //It will now display as undefined in the HTML document.
}
function Ride_Function() { //THIS IS AN EXAMPLE OF A TERNARY OPERATION,
    var Height, Can_Ride; //BECAUSE A TERNARY OPERATOR OPERATES ON 3 VALUES.
    Height = document.getElementById("Height").value; //IT IS USED TO ASSIGN A VARIABLE BASED ON A CONDITION,
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough"; //AS WELL AS A CONDITIONAL OPERATOR IN THAT IT ASSIGNS A VALUE TO A VARIABLE BASED ON THE CONDITION.
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; //"?" IS THE TERNARY OPERATOR.
}

function Vote_Function() { //THE FIRST FUNCTION UP ABOVE USES THE TERNARY OPERATOR
    var Age, Can_Vote; //IN ORDER TO SHOW IF A PERSON IS TALL ENOUGH TO GO ON A AMUSEMENT PARK RIDE.
    Age = document.getElementById("Age").value; //THIS FUNCTION IS USED TO SHOW WHETHER OR NOT A PERSON IS OLD ENOUGH TO VOTE,
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough"; //DEPENDING ON THEIR AGE.
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //HER I HAVE CREATED A CONSTRUCTOR FUNCTION,
    this.Vehicle_Make = Make; //USING "THIS" KEYWORDS. WHEN USED WITHIN AN OBJECT, THE VALUE OF "THIS" IS THE OBJECT.
    this.Vehicle_Model = Model; //WHEN USED WITHIN A FUNCTION, THE VALUE OF "THIS" IS THE OBJECT THAT POSSESSES THE FUNCTION.
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //THE "NEW" KEYWORD IS USED TO CREATE NEW OBJECTS.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //HERE I HAVE CREATED A FEW NEW VEHICLES.
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function Vehicle_Function1() { //THIS FUNCTION DISPLAYS ONE RESULT FROM THE CONSTRUCTOR FUNCTION
    document.getElementById("K_and_C").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Vehicle_Function2() { //THIS FUNCTION SHOWS ANOTHER RESULT FROM THE CONSTRUCTOR FUNCTION
    document.getElementById("N_and_T").innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
    " manufactured in " + Jack.Vehicle_Year;
}

function count_Function() { //THIS IS AN EXAMPLE OF A NESTED FUNCTION
    document.getElementById("Nested_Function").innerHTML = count(); //NESTED REFERS TO SOMETHING CONTAINED WITHIN SOMETHING ELSE.
    function count() { //THIS CAN BE A PROGRAM WITHIN A PROGRAM OR SETS OF INSTRUCTIONS INSIDE ANOTHER SET OF INSTRUCTIONS.
        var Starting_point = 1;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }
}


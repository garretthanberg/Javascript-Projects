var X = 9000; //THIS IS AN EXAMPLE OF A GLOBAL VARIABLE (OUTSIDE OF THE FUNCTION).

function add() {
    document.write(2000 + X + "<br>");
}

add();

function add3() { //ORIGINALLY THIS DID NOT HAVE THE "VAR G = 99" WRITTEN OUT,
    var G = 99; //AND ONLY HAD THE DOCUMENT.WRITE(20 + G + "<BR>") WRITTEN OUT. BUT I USED CONSOLE.LOG() WITH THE CHROME DEV TOOLS TO DEBUG THE ISSUE. 
    document.write(20 + G + "<br>"); //THIS IS AN EXAMPLE OF A LOCAL VARIABLE (INSIDE OF THE FUNCTION).
}

add3();

function get_time() { //THIS IS AN EXAMPLE OF AN "IF STATEMENT". THIS WILL DISPLAY, "HELLO, HOW ARE YOU TODAY?" IF IT IS ANYTIME BEFORE 6 PM.
    if (new Date().getHours() < 18) {
        document.getElementById("Hello").innerHTML = "Hello, how are you today?";
    }
}

function get_date() { //THIS IS ANOTHER EXAMPLE OF AN "IF STATEMENT". THIS WILL DISPLAY, "HAPPY BIRTHDAY" IF IT IS THE 8TH DAY OF THE MONTH.
    if (new Date().getDate() == 8) {
        document.getElementById("Date").innerHTML = "Happy Birthday!";
    }
}

function age() { //THIS IS AN EXAMPLE OF AN "IF/ELSE STATEMENT." IF YOU ARE GREATER THAN OR EQUAL TO "21" IT WILL DISPLAY, "YOU ARE OLD ENOUGH TO DRINK!"
    Age = document.getElementById("Age").value; //BUT IF YOU ARE NOT 21 OR OLDER, IT WILL DISPLAY, "YOU ARE NOT OLD ENOUGH TO DRINK!"
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_Old?").innerHTML = Drink;
}

function time() { //THIS IS AN EXAMPLE OF AN "IF/IF ELSE/ELSE STATEMENT."
    var Time = new Date().getHours(); //IF THE TIME IS LESS THAN 12 / GREATER THAN 0, IT WILL DISPLAY, "IT IS THE MORNING!"
    var Reply; //IF THE TIME IS GREATER THAN OR EQUAL TO 12 / LESS THAN 18, IT WILL DISPLAY, "IT IS THE AFTERNOON!"
    if (Time < 12 == Time > 0) { //IF THE TIME IS ANYTHING ELSE BESIDES THOSE TWO OPTIONS, THAN IT WILL DISPLAY, "IT IS THE EVENING!"
        Reply = "It is the morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon!"
    }
    else {
        Reply = "It is the evening!"
    }
    document.getElementById("Time").innerHTML = Reply;
}
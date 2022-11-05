function myFunction() {
    var sentence = "Hello World, my name"; //Here I am making a string variable for sentence
    sentence += " is Garrett Hanberg!"; //Here I am concatenating more to the variable sentence with "+="
    document.getElementById("Concatenate").innerHTML = sentence; //Here I am using .getElementById to find the id=concatenate in my index.html file.
    //This allows me to change "CLICK HERE NOW" in my HTML file to the variable sentence I created when I click on it with my mouse.
}
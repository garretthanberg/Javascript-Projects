function validateForm() {
    let x = document.forms["myForm"]["firstName"].value;
    let y = document.forms["myForm"]["lastName"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
}
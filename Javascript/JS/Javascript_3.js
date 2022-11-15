function display(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the main character in the " + character.innerHTML + " video game franchise!");
}
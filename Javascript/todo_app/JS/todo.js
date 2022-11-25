/* THIS FUNCTION GETS THE TASK FROM INPUT */
function get_todos() {
    /*THIS CREATES AN ARRAY OF TASKS THAT ARE INPUTED*/
    var todos = new Array;
    /*THIS PULLS THE TASK THAT WAS SAVED IN THE WEB BROWSER MEMORY*/
    var todos_str = localStorage.getItem('todo');
    /*IF THE INPUT IS NOT NULL THEN JSON.PARSE WILL COMMUNICATE WITH THE WEB BROWSER
    TO MAKE THE TASK A JAVASCRIPT OBJECT.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*THIS FUNCTION ADDS THE INPUTED TASK TO THE GET_TODOS FUNCTION ARRAY*/
function add() {
    /*THIS TAKES THE INPUTED TASK AND CREATES A VARIABLE OF IT*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*THIS ADDS A NEW TASK TO THE END OF THE ARRAY*/
    todos.push(task);
    /*THIS CONVERTS THE TASK INPUT TO A JSON STRING*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    
    return false;
}
/*THIS FUNCTION KEEPS THE TASKS PERMANETLY DISPLAYED ON THE SCREEN*/
function show() {
    /*THIS SETS THE TASK THAT WAS RETRIEVED AS A VARIABLE*/
    var todos = get_todos();

    /*THIS SETS UP EACH TASK AS AN UNORDERED LIST*/
    var html = '<ul>';
    /*THIS DISPLAYS A TASK TO THE LIST IN THE ORDER THAT IT IS INPUTED*/
    for (var i = 0; i < todos.length; i++) {
        /*THIS ALSO DISPLAYS THE TASK AS A LIST AND CREATES THE BUTTON WITH THE "X"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    /*THIS DISPLAYS THE TASK AS A LIST */
    document.getElementById('todos').innerHTML = html;

    /*THIS TELLS THE BROWSER HOW TO DISPLAY THE TODO ARRAY AFTER AN ITEM HAS BEEN REMOVED*/
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
/*THIS DISPLAYS THE INPUTED TASK WHEN THE 'ADD ITEM' BUTTON IS CLICKED*/
document.getElementById('add').addEventListener('click', add);
/*THIS WILL KEEP THE INPUTS DISPLAYED PERMANETLY ON THE SCREEN*/
show();
/* THIS CREATES THE FUNCTIONALITY OF REMOVING A TODO ITEM FROM THE ARRAY */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*THIS LOOKS IN THE SHOW() HOW TO DISPLAY A REMOVED ITEM ON THE SCREEN */
    show();

    return false;
}
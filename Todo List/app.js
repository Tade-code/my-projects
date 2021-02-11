//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo); //this button click creates a new todo list
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div"); //This will automatically add a new div called "todo" in our HTML
    todoDiv.classList.add("todo"); //This adds a "todo" div under our "<ul class="todo-list"></ul>" 
    //Create LI
    const newTodo = document.createElement("li"); //This will automatically add a new tag called "li" in our HTML under "<ul class="todo-list"></ul>"
    newTodo.innerText = todoInput.value; //This creates a new text that is written in the input 
    newTodo.classList.add("todo-item"); //This adds a "todo-item" div under our "<ul class="todo-list"></ul>"
    todoDiv.appendChild(newTodo); //This is added to our "todo-item" class
    //ADD TODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value);
    //CHECK MARK BUTTON
    const completedButton =document.createElement("button"); //This creates a button tag 
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; //This adds an icon in our button
    completedButton.classList.add("complete-btn"); //This is a class of div
    todoDiv.appendChild(completedButton); //This is added to our "complete-btn" class
    //CHECK TRASH(delete) BUTTON
    const trashButton =document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv); //This makes all the divs created above to be added to our "todo-list" in our HTML
    //CLEAR TODO INPUT VALUE
    todoInput.value = ""; //This clears the text in the input as soon as a new list has been added
}

function deleteCheck(e){
    const item = e.target
    //DELETE TODO
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // todo.remove(); (This can be added but for animation purposes it was discarded)
        //ANIMATION
        todo.classList.add("fall"); //This was added for an animation purpose
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    //CHECK MARK
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) { //This targets the values in the "Option" tag
            case "all": //It shows all the todos
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){ // This checks only the todos that have the class of completed on them
                    todo.style.display = "flex"; //This displays the todos in a 'display: flex' if they are completed
                } else { //If they don't have the class of completed
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('uncompleted')) {
                    todo.style.display = "flex";
                }  else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    //This is to check if you already have things in storage
    let todos;
    if(localStorage.getItem('todos') === null) { //This is to check if you any items in the storage and if not show "null"
        todos = []; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos')); //If there's something in the storage it will take it or parse it back and create it into an array
    }
    todos.push(todo); //Whatever is in the storage is passed into an array
    localStorage.setItem('todos', JSON.stringify(todos)); //And then we are going to set it back into a local storage
}


//First of all it's going to check if we have a todos list
// let todos;
//     if(localStorage.getItem('todos') === null) { //This is to check if you any items in the storage and if not show "null"
//         todos = []; //If we don't have its going to create an empty array
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos')); //If there's something in the storage it will take it or parse it back and create it into an array
//     }


function getTodos() {
    //This is to check if you already have things in storage
    let todos;
        if(localStorage.getItem('todos') === null) { //This is to check if you any items in the storage and if not show "null"            todos = []; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos')); //If there's something in the storage it will take it or parse it back and create it into an array
    }
    todos.forEach(function(todo) {
        //Todo DIV
    const todoDiv = document.createElement("div"); //This will automatically add a new div called "todo" in our HTML
    todoDiv.classList.add("todo"); //This adds a "todo" div under our "<ul class="todo-list"></ul>" 
    //Create LI
    const newTodo = document.createElement("li"); //This will automatically add a new tag called "li" in our HTML under "<ul class="todo-list"></ul>"
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item"); //This adds a "todo-item" div under our "<ul class="todo-list"></ul>"
    todoDiv.appendChild(newTodo); //This is added to our "todo-item" class
    //CHECK MARK BUTTON
    const completedButton =document.createElement("button"); //This creates a button tag 
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; //This adds an icon in our button
    completedButton.classList.add("complete-btn"); //This is a class of div
    todoDiv.appendChild(completedButton); //This is added to our "complete-btn" class
    //CHECK TRASH(delete) BUTTON
    const trashButton =document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    //This is to check if you already have things in storage
    let todos;
        if(localStorage.getItem('todos') === null) { //This is to check if you any items in the storage and if not show "null"            todos = []; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos')); //If there's something in the storage it will take it or parse it back and create it into an array
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
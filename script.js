console.log("JS is running");
let input = document.getElementById("input");
let button = document.getElementById("addbtn");
let todolist = document.getElementById("todolist");
let listelement = document.getElementById("listelement");

let todos = JSON.parse(localStorage.getItem("todos-key")) || [];
showtodo();
button.addEventListener("click", function () {
    let text = input.value; // accessing the input with (.value)
    if (text === '') return;
    todos.push(text);
    localStorage.setItem("todos-key", JSON.stringify(todos));
    showtodo();
    input.value = '';

})
function showtodo() {
    todolist.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let list = document.createElement("li");
        list.innerText=todos[i];
        todolist.appendChild(list);
        
    }
}
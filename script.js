let input = document.getElementById("input");
let button = document.getElementById("addbtn");
let delbutton = document.getElementById("delbtn");
let clearbutton = document.getElementById("clearbtn");
let todolist = document.getElementById("todolist");

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
delbutton.addEventListener("click", function () {
    if (todos.length === 0) return;

    todos.pop(); // removes last item

    localStorage.setItem("todos-key", JSON.stringify(todos));

    showtodo();
});

clearbutton.addEventListener("click", function () {
    todos = [];

    localStorage.setItem("todos-key", JSON.stringify(todos));

    showtodo();
});
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});
function showtodo() {
    todolist.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let list = document.createElement("li");
        list.innerText=todos[i];
        todolist.appendChild(list);
    }
}
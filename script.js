let input = document.getElementById("input");
let button = document.getElementById("addbtn");
let todolist = document.getElementById("todolist");
let listelement = document.getElementById("listelement");
button.addEventListener("click", function () {
    let text = input.value; // accessing the input with (.value)
    if(text==='') return;
    let list = document.createElement("li");
    todolist.appendChild(list);
    list.innerText = text;
    input.value = '';

})
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let input = document.querySelector(".in");

addBtn.addEventListener("click", () => {
    let inputText = input.value.trim();
    if (inputText === "") {
        return;
    }
    if (list.children.length > 0) {
        return
    }

    let li = document.createElement("li");
    li.textContent = inputText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = ("Delete");

    deleteBtn.addEventListener("click",() => {
        li.remove()
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
})



let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");
let addTodo = document.getElementById("addTodo");

let total = document.getElementById("total");
let complete = document.getElementById("complete");

addTodo.addEventListener("click",() => {
    let todoText = todoInput.value.trim();
    if (todoText === ""){
        return;
    }
    let li = document.createElement("li");

    let text = document.createElement("span");
    text.textContent = todoText;

    let completeButton = document.createElement("button");
    completeButton.textContent = ("Complete");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = ("Delete");

    completeButton.addEventListener("click",() => {
        li.classList.toggle("completed")
    });

    deleteButton.addEventListener("click",() => {
        li.remove();

        updateTotal();
        updateCompleted();
    });

    li.appendChild(text);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li)

    todoInput.value = ""

    updateTotal();

});

function updateTotal () {
    total.textContent = todoList.children.length;
}

function updateCompleted () {
    let copm = todoList.querySelectorAll(".completed");
    complete.textContent = complete.length;
}
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let task = document.querySelector(".tasks");
let deleteAll = document.querySelector(".delete");

deleteAll.addEventListener("click", e =>{
    localStorage.clear();
    task.innerHTML = '';
});

let arrOfTasks = [];

if(window.localStorage.getItem("tasks")){
    arrOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
}
getDataFromLocalStorage();

task.addEventListener("click", (e) =>{
    if(e.target.classList.contains("del")){
        deleteTask(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains("task")){
        toggleStatusTask(e.target.getAttribute("data-id"));
        e.target.classList.toggle("done");
    }
});

add.onclick = ()=>{
    if (input.value !== ""){
        addTask(input.value);
        input.value = "";
    };
};

function addTask (textTask){
    const task ={
        id : Date.now(),
        title: textTask,
        completed: false,
    };
    arrOfTasks.push(task);
    addTaskToPage(arrOfTasks);
    addToLocalStorage(arrOfTasks);
};

function addTaskToPage(arr){
    task.innerHTML = "";
    arr.forEach(el => {
        let div = document.createElement("div");
        div.className = "task";
        if (el.completed){
            div.className = "task done";
        };
        div.setAttribute("data-id",el.id);
        div.setAttribute("id","divTask");
        div.appendChild(document.createTextNode(el.title));
        let btn = document.createElement("button");
        btn.className = "del";
        btn.setAttribute("id","buttonTask");
        btn.appendChild(document.createTextNode("Delete"));
        div.appendChild(btn);
        task.appendChild(div);
    });
};

function addToLocalStorage(arrOfTasks){
    window.localStorage.setItem("tasks",JSON.stringify(arrOfTasks));
};

function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("tasks");
    if (data){
        let tasks = JSON.parse(data);
        addTaskToPage(tasks);
    };
};

function deleteTask(taskId){
    arrOfTasks = arrOfTasks.filter((task)=>task.id != taskId);
    addToLocalStorage(arrOfTasks);
}

function toggleStatusTask(taskId){
    for(let i=0;i<arrOfTasks.length;i++){
        if(arrOfTasks[i].id == taskId){
            arrOfTasks[i].completed == false ?  arrOfTasks[i].completed = true: arrOfTasks[i].completed = false;
        }
    }
    addToLocalStorage(arrOfTasks);
}

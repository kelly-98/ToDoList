import {ToDo} from "./todo.js";
import {ToDoList} from "./todolist.js";

// danh sach todo
let tdList = new ToDoList();
let completeList = new ToDoList();

// Ham rut gon cu phap getElementById
const getEle = (id) => {
    return document.getElementById(id);
}

// Ham them todo
const addToDo = () => {
    let txtToDo = getEle("newTask").value;
    let ulToDo = getEle("todo");

    if(txtToDo !== "") {
        let todo = new ToDo(txtToDo, "todo");
        tdList.addToDo(todo);
    }
    
    showToDoList(ulToDo);

    getEle("newTask").value = "";
}

// Ham hien thi todo 
const showToDoList = (ulToDo) => {
    ulToDo.innerHTML = tdList.renderToDo();
}

const showCompleteList = (ulCompleted) => {
    ulCompleted.innerHTML = completeList.renderToDo();
}

// Ham delete todo 
const deleteToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getEle("todo");
    let ulCompleted = getEle("completed");

    if (status == "todo") {
        tdList.removeTodo(tdIndex);
        showToDoList(ulToDo);   
    } else if (status == "completed") {
        completeList.removeTodo(tdIndex);
        showCompleteList(ulCompleted);   
    } else {
        alert("Cannot delete todo!!!");
    }


    
}


getEle("addItem").addEventListener("click", function() {
    addToDo();
});



window.deleteToDo = deleteToDo;

const completeToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    console.log(tdIndex);
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getEle("todo");
    let ulCompleted = getEle("completed");

    if(status == "todo") {
        let completeItem = tdList.todoList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(completeItem[0].textToDo, "completed");
        moveToDo(tdList, completeList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);
    } else if(status == "completed") {
        let undoItem = completeList.todoList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(undoItem[0].textToDo, "todo");
        moveToDo(completeList, tdList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);
    } else {
        alert("Cannot move todo!!!");
    }
}

window.completeToDo = completeToDo;

const moveToDo = (depart, arrival, obj, index) => {
    //remove todo from depart
    depart.removeTodo(index);
    
    // add todo to arrival
    arrival.addToDo(obj);
}

const sortASC = () => {
    let ulToDo = getEle("todo");
    tdList.sortToDoList(false);
    showToDoList(ulToDo);
}

window.sortASC = sortASC;

const sortDES = () => {
    let ulToDo = getEle("todo");
    tdList.sortToDoList(true);
    showToDoList(ulToDo);
}

window.sortDES = sortDES;


const sortCompleted = () => {
    let ulCompleted = getEle("completed");
    completeList.sortToDoList(false);
    showCompleteList(ulCompleted);
}

window.sortCompleted = sortCompleted;


const clock = () => {
    alert("Coming Soon Update!!!");
}
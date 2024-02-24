// Retrieve tod list from local storage or 
// Initialize an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoList");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initialize Project
// Add some listeners

document.addEventListener("DOMContentLoaded", 
function(){
    addButton.addEventListener("click", addTask())
    todoInput.addEventListener("keydown", function(event){
        if (event.key == "Enter") {
           event.preventDefault();
           addTask(); 
        }
    });
    deleteButton.addEventListener("click", deleteALLTasks());
    displayTask();
});

function addTask(){
    // Add Logic

}

function deleteALLTasks(){
    // Add Logic
}

function displayTask(){
    // Add Logic
}
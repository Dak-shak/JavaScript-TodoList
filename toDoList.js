// Todo List App

// Goal: Simple to-do app with in-memory task storage.
// Each task should have an: id, title, completed

// Features:

// Add task
// Mark task as done/undone
// Filter task according to:  completed | pending tasks
// Delete task

function addTask(title, id) {
    let tasks = []; 
    let newTask = {     
    title: title,  
    id: id,         
    completed: false   
  };
  tasks.push(newTask);
  console.log("Task added:", newTask);
}

addTask("Prayer", 1);

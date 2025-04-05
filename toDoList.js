// Todo List App

// Goal: Simple to-do app with in-memory task storage.
// Each task should have an: id, title, completed

// Features:

// Add task
// Mark task as done/undone
// Filter task according to:  completed | pending tasks
// Delete task

let tasks = []; 

function addToDos(title, id) {
    let newTask = {     
    title: title,  
    id: id,         
    completed: false   
  };
  tasks.push(newTask);
  console.log("Task added:", newTask);
}
addToDos("Prayer", 1);
addToDos("Study", 2);
addToDos("Exercise", 3);
addToDos("Read", 4);

function markAsDone(id) {
  tasks.forEach((task) => {
    if (task.id === id) {
      task.completed = true;
      console.log("Task marked as done:", task);
    }
  });
}
markAsDone(1);
markAsDone(4);


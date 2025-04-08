// Todo List App

// Goal: Simple to-do app with in-memory task storage.
// Each task should have an: id, title, completed
// Features:
// Add task
// Mark task as done/undone
// Filter task according to:  completed | pending tasks
// Delete task

let tasks = []; 

// Add task
function addToDos(title,) {
  let taskid  = tasks.length + 1;
    let newTask = {     
    title: title,  
    id: taskid,         
    completed: false   
  };
  tasks.push(newTask);
  console.log("Task added:", newTask);
}
addToDos("Prayer",);
addToDos("Study",);
addToDos("Exercise",);   
addToDos("Read",); 
addToDos("Cook",);
addToDos("Clean",);
addToDos("Laundry",);
addToDos("Shopping",);
addToDos("Work",);

// Mark task as done/undone

function markAsDone(id) {
  tasks.forEach((task) => {
    if (task.id === id) {
      task.completed = true;
      console.log("Task marked as done:", task);
    }
  });
}
markAsDone(1);
markAsDone(3);
markAsDone(5);
markAsDone(7);
markAsDone(9);

// Filter task according to:  completed | pending tasks

function getCompletedTasks() {
  return tasks.filter(task => task.completed);
}
function getPendingTasks() {
  return tasks.filter(task => !task.completed);
}
console.log("Completed:", getCompletedTasks());
console.log("Pending:", getPendingTasks());


// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}
deleteTask(9);
console.log("After Deletion:", tasks);
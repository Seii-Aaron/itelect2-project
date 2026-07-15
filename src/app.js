// app.js - Main application entry point
console.log('Server starting...');

import { formatDate, validateTask, mergeTaskUpdate } from "./utils.js";



console.log(formatDate(new Date("2026-07-22")));
console.log(formatDate(new Date("2026-12-25")));



const task1 = {
    title: "Homework",
    dueDate: "2026-07-22"
};

const task2 = {
    title: "Homework"
};

console.log(validateTask(task1));
console.log(validateTask(task2));
console.log(validateTask());



const originalTask = {
    title: "Old Task",
    dueDate: "2026-07-22"
};

console.log(originalTask);
console.log(mergeTaskUpdate(originalTask, { title: "New Task" }));
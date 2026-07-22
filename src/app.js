// app.js - Main application entry point
import { fetchSampleUsers, fetchSampleUsersPromise } from "./api.js";
import { formatDate, validateTask, mergeTaskUpdate, createTask } from "./utils.js";


console.log('Server starting...');


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



const posts = await fetchSampleUsers();
const newPosts = posts.map((post) => ({ id: post.id, name: post.name, email: post.email }));
console.log(newPosts);

const posts2 = await fetchSampleUsersPromise();
const newPosts2 = posts2.map((post2) => ({ id: post2.id, name: post2.name, email: post2.email }));
console.log(newPosts2);

try {
    const users = await fetchSampleUsers();
    console.log(users);

    const task = createTask({
        title: "Homework",
        dueDate: "2026-07-22"
    });
    console.log(task);

} catch (error) {
    console.log(error);
}


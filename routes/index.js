import express from "express";
import { mergeTaskUpdate, tasks, validateTask } from "../src/utils.js";
import { fetchSampleUsers } from "../src/api.js";

const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("GET request received");
});

router.post("/hello", (req, res) => {
    res.send("POST request received");
});

router.get("/tasks", (req, res) => {
    res.json(tasks);
});

router.get("/tasks/:id", (req, res, next) => {
    const id = Number(req.params.id);

    const task = tasks.find((task) => task.id === id);

    if (task) {
        res.json(task);
    } else {
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }
});

let nextId = 3;

router.post("/tasks", (req, res, next) => {
    if (!validateTask(req.body)) {
        const err = new Error("title and due date required");
        err.status = 404;
        return next(err);
    }
    const task = { id: nextId++, ...req.body, completed: false };
    tasks.push(task);
    res.status(201).json(task);
});

router.put("/tasks/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1){
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }
    tasks[index] = mergeTaskUpdate(tasks[index], req.body);
    res.status(200).json(tasks[index]);
});

router.delete("/tasks/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1){
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }
    const [removed] = tasks.splice(index, 1);
    res.status(200).json({ message: "Deleted", task: removed });
});

let users = [];
users = await fetchSampleUsers();
router.get("/users", (req, res) => {
    res.json(users);
});

export default router;

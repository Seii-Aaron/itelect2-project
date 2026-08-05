import express from "express";
import { tasks } from "../src/utils.js";
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

router.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find((task) => task.id === id);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

let users = [];
users = await fetchSampleUsers();
router.get("/users", (req, res) => {
    res.json(users);
});


export default router;

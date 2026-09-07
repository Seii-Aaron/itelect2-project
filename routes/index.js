//hello world
//test

import express from "express";
import db from "../models/index.cjs";

const { Task, User } = db;
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("GET request received");
});

router.post("/hello", (req, res) => {
    res.send("POST request received");
});

router.get("/tasks", async (req, res) => {
    const tasks = await Task.findAll({ include: User, order: [["id", "ASC"]] });
    res.json(tasks);
});

router.get("/tasks/:id", async (req, res, next) => {
    const task = await Task.findByPk(req.params.id, { include: User });
    if(!task) {
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }
    res.json(task);
});

router.post("/tasks", async (req, res, next) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
});

router.put("/tasks/:id", async (req, res, next) => {
    const task = await Task.findByPk(req.params.id);
    if(!task) {
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }
    await task.update(req.body);
    res.json(task);
});

router.delete("/tasks/:id", async (req, res, next) => {
    const task = await Task.findByPk(req.params.id);
    if(!task) {
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }
    await task.destroy();
    res.json({ message: "Deleted", task });
})

router.get("/users", async (req, res) => {
    const users = await User.findAll({ include: Task, order: [["id", "ASC"]]});
    res.json(users);
});

export default router;

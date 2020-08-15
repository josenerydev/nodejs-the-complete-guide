"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = express_1.Router();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: Date.now.toString(),
        text: req.body.text,
    };
    todos.push(newTodo);
});
exports.default = router;

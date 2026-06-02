const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Sarah"
    }
];

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

// GET one user by ID
app.get("/users/:id", (req, res) => {
    const user = users.find(
        u => u.id == req.params.id
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

// POST create user
app.post("/users", (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

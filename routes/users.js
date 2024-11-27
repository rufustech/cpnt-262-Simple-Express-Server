const express = require("express");
const users = require("../data/users");
const slugify = require("../utils/slugify");
const router = express.Router();

// Serve all users
router.get("/", (req, res) => {
    res.json(users);
});

// Serve individual user dynamically
router.get("/:userSlug", (req, res) => {
    const userSlug = req.params.userSlug;
    const user = users.find(u => slugify(u.name) === userSlug);

    if (user) {
        res.send(`
            <h1>${user.name}</h1>
            <p>Email: ${user.email}</p>
        `);
    } else {
        res.status(404).send("User not found.");
    }
});

module.exports = router;

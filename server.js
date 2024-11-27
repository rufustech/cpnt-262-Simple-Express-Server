const express = require("express");
const path = require("path");
const { homeRouter, usersRouter } = require("./routes");
const logger = require("./utils/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRouter);
app.use("/users", usersRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

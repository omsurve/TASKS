const express = require('express');
const app = express();

app.use(express.json());

const taskRoutes = require('./routes/task.routes');

app.use('/tasks', taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

module.exports = app;
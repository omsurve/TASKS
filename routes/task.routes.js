const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

router.get('/', taskController.getTasks);
router.post('/create', taskController.createTask);
router.put('/:id', taskController.deleteTask);

module.exports = router;
const path = require("path");
const fileHandler = require('./fileHandler');
const taskManager = require('./taskManager');

//Define the file path for tasks.json
const filePath = path.join(__dirname,"tasks.json");

//Load existing tasks
let tasks = fileHandler.loadTasks(filePath);
//Add a new task
taskManager.addTask(tasks, "wash dishes");
//List all tasks
taskManager.listTask(tasks);
//Save new updated task list
fileHandler.saveTasks(filePath, tasks);

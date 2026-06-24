

function addTask(tasks, task){
    tasks.push(task);
    console.log(`Task "${task}" added!`)
}

function listTask(tasks){
    console.log(`Here is the current list of tasks:
    Tasks:
    ${tasks}`);
}

module.exports = {addTask, listTask};
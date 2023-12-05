const express = require('express');
const router = express.Router();
const TaskService = require('./tasks.service');

module.exports = router;


router.get('/:userId', getTasksByUser);
router.post('/newTask', postNewTask)
router.put('/:tasksId/status/:newStatus', changeTaskStatus);
router.put('/:tasksId/rename', changeTaskName);
router.delete('/:tasksId/delete', deleteTask);

router.use((req,res) => {
    res.status(404).send('Not Found')
})


function getTasksByUser(req, res, next) {
    TaskService.getTasksByUser(req.params)
    .then(tasks => {
        if (tasks) {
            console.log('Tasks:', tasks);
            res.send(tasks);
        } else {
            console.log('No tasks found.');
            res.status(404).send('No tasks found.'); // Adjust status code and message as needed
        }
    })
    .catch(next);
}

function postNewTask(req, res, next) {
    TaskService.postNewTask(req.query)
    .then( () => res.status(200).send('Task created successfully'))
    .catch(next)
}

function deleteTask(req, res, next) {
    TaskService.deleteTask(req.params)
    .then( () => res.status(200).send('Task deleted successfully'))
    .catch(next);
}

function changeTaskName(req, res, next) {
    let newName= req.query.name
    let tasksId = req.params['tasksId'];
    TaskService.changeTaskName( tasksId, newName)
    .then(() => res.status(200).send('Tasks ' + tasksId +' renamed !'))
    .catch(next);
}

function changeTaskStatus(req, res, next) {
    console.log(req.params)
    TaskService.changeTaskStatus(req.params)
    .then( () => res.status(200).send('Task renamed successfully'))
    .catch(next);
}
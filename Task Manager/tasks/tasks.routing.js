const express = require('express');
const router = express.Router();
const TaskService = require('./tasks.service');

module.exports = router;


router.get('/:userId/tasks', getTasksByUser);
router.put('/:tasksId/status/:newStatus', changeTaskStatus);
router.put('/:tasksId/rename', changeTaskName);
router.delete('/:tasksId/delete', deleteTask);

router.use((req,res) => {
    res.status(404).send('Not Found')
})




function getTasksByUser(req, res, next) {
    TaskService.getTasksByUser(req.params)
    .then(tasks => {res.json(tasks)})
    .catch(next);
}

function deleteTask(req, res, next) {
    TaskService.deleteTask(req.params)
    .then(res => console.log('Line deleted'))
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
    .then(result => {
        console.log(result);
        res.send(result); 
    })
    .catch(next);
}
const  {connection} = require('../index.js');

module.exports = {
    getTasksByUser,
    deleteTask,
    changeTaskName,
    changeTaskStatus
}

async function getTasksByUser({userId}) {
    connection.createQuery('SELECT * FROM tasks WHERE userID = ' + userId, (res ,err) => {
        if (err) throw err;
        return res;
    })
}

async function deleteTask({tasksId}) {
    connection.createQuery('DELETE * FROM tasks WHERE tasksId = ' + tasksId, (res ,err) => {
        if (err) throw err;
        return res;
    })
}

async function changeTaskName({tasksId, newName}) {
    connection.createQuery('UPDATE tasks SET name = ' + newName + ' WHERE tasksId = ' + tasksId, (res ,err) => {
        if (err) throw err;
        return res;
    })
}

async function changeTaskStatus({tasksId, newStatus}) {
    connection.createQuery('UPDATE tasks SET status = ' + newStatus + ' WHERE tasksId = ' + tasksId, (res ,err) => {
        if (err) throw err;
        return res;
    })
}
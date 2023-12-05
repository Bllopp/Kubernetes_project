const  {connection} = require('../index.js');

module.exports = {
    getTasksByUser,
    deleteTask,
    changeTaskName,
    changeTaskStatus
}

async function getTasksByUser({userId}) {
    connection.query('SELECT * FROM tasks WHERE userID = ' + userId, (err, res) => {
        if (err) console.error('getTasks error : ', err);
        console.log(res)
        return res;
    })
}

async function deleteTask({tasksId}) {
    connection.query('DELETE * FROM tasks WHERE tasksId = ' + tasksId, (err, res) => {
        if (err) throw err;
        return res;
    })
}

async function changeTaskName({tasksId, newName}) {
    connection.query('UPDATE tasks SET name = ' + newName + ' WHERE tasksId = ' + tasksId, (err, res) => {
        if (err) throw err;
        return res;
    })
}

async function changeTaskStatus({tasksId, newStatus}) {
    connection.query('UPDATE tasks SET status = ' + newStatus + ' WHERE tasksId = ' + tasksId, (err, res) => {
        if (err) throw err;
        return res;
    })
}
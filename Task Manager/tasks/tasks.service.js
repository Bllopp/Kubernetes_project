const  {connection} = require('../index.js');

module.exports = {
    getTasksByUser,
    deleteTask,
    changeTaskName,
    changeTaskStatus,
    postNewTask
}



async function getTasksByUser({userId}) {
    return new Promise((resolve, reject) => {

  
    connection.query('SELECT * FROM tasks WHERE userID = ' + userId, (err, res) => {
        if(err){
            // The equivalent of throwing the error
            reject(err);
        } else {
            // The equivalent of returning a value for getAll
            resolve(res);
        }
    })

})

}

async function postNewTask({name, userId}){
    connection.query('INSERT INTO tasks (name, status, userId) VALUES (?,?,?)',[name,0,userId], (err,res) => {
        if (err) throw (err)
        return res;
    })

}

async function deleteTask({tasksId}) {
    connection.query('DELETE FROM tasks WHERE tasksId = ' + tasksId, (err, res) => {
        if (err) throw err;
        return res;
    })
}

async function changeTaskName(tasksId,newName) {
    connection.query('UPDATE tasks SET name = ' + newName + ' WHERE tasksId = ' + tasksId, (err, res) => {
        if (err) throw err;
        return res;
    })
}

async function changeTaskStatus(params) {
    console.log('params : ', params)
    connection.query('UPDATE tasks SET status = ' + params['newStatus'] + ' WHERE tasksId = ' + params['tasksId'], (err, res) => {
        if (err) throw err;
        return res;
    })
}
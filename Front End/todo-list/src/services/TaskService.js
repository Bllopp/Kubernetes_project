const API_url = process.env.API_url || 'http://localhost:4040/tasks';

async function getUserTask(userId) {

    try{
        fetch(API_url + '/' + userId, {
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
    }
     catch(err){
        throw err;
    }
}


export default {getUserTask}
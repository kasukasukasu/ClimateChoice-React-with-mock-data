const url = '/';

export function fetchall(callback) {
    fetch(url + "tasks", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    console.log(json);
                    callback(json);
            });
        });
}

export function fetchallchoices(callback) {
    fetch(url + "relations", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    console.log("json relations");
                    console.log(json);
                    callback(json);
            });
            console.log('löytyy relations tiedot');
        });
}


export function createUser(id) {
    var user = '{"uid": "' + id + '"}';
    fetch(url + "users",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: user}
    );
}


export function createRelation(data) {
    var relation = '{"choice": "' + data.choice + '", "user": {"uid": "' + data.user_id + '"}, "task": {"id": ' + data.task_id + '}}';
    fetch(url + "relations",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: relation}
    );
}


export function fetchAllRelations(callback) {
    fetch(url + "relations", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchTask(id, callback) {
    fetch(url + "tasks/" + id, {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchTasksIds(callback) {
    fetch(url + "tasks/allids" , {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function changeChoice(id, data) {
    return fetch(url + 'relations/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        return res;
    }).catch(err => err);
}




// //tää ei vissii toimi
// export function deleteTasks(id/*, callback*/) {
//     return fetch(apiurli+'tasks/'+id, {method: 'DELETE'})
//         .then(function(response){
//             //callback();
//         })
// }
//
// export function createTask(task, callback) {
//     fetch(apiurli+'tasks/',  {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(task)
//     })
//         .then((function(response) {
//             callback();
//         }));
// }
//
// export function updateTask(task, callback) {
//     fetch(apiurli+'tasks/'+task.id,  {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(quote)
//     })
//         .then((function(response) {
//             callback();
//         }));
// }
const express = require('express');
const Task = require('./models/task.js');
const User = require('./models/user');

require('./db/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        res.status(500).send();
    }); //empty collection searches everything
});

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    }).catch((e) => {
        res.status(500).send();
    }); 
});

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }).catch((e) => {
        res.status(500).send(e);
    });
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task) => {
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    }).catch((e) => {
        res.status(500).send(e);
    });
})

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.send(task);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
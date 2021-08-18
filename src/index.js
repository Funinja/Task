const express = require('express');
const Task = require('./models/task.js');
const User = require('./models/user');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

require('./db/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET requests are disabled');
//     }else{
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.send('503 maintenance');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const jwt = require('jsonwebtoken');

const myFunction = async() => {
    const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'});
    console.log(token);

    const data = jwt.verify(token, 'thisismynewcourse');
    console.log(data);
}

myFunction()


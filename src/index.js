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


const main = async () => {
    // const task = await Task.findById('611d5ff97c030a16f8f083fd');
    // await task.populate('owner').execPopulate();
    // console.log(task);
    const user = await User.findById('611d5f4bee3d8b1e0410cdf1');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
    
}

main();
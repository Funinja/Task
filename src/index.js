const express = require('express');
const Task = require('./models/task.js');
const User = require('./models/user');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');



require('./db/mongoose.js');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

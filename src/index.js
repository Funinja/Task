const express = require('express');
const Task = require('./models/task.js');
const User = require('./models/user');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

require('./db/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345';
    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare('red12345', hashedPassword);
    console.log(isMatch);

}

myFunction();
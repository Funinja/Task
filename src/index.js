const express = require('express');
const Task = require('./models/task.js');
const User = require('./models/user');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

require('./db/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize:1000000
    },
    fileFilter(req, file, cb) {
        // cb(new Error('File must be a PDF'));
        // cb(undefined, true);
        // cb(undefined, false);
        if (!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a DOC or DOCX'));
        }

        cb(undefined, true);

    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
}, (error, req, res, next) => {
    res.status(400).send( {error : error.message} );
})

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

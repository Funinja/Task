//CRUD: create, read, update delete

const {MongoClient, ObjectId} = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();

// console.log(id.id.length);
// // console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewURLParser : true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({_id: new ObjectId("610f0d3f67dc4c029cfcc2ec")} , (error, user) => {
    //     if (error){
    //         return console.log('Unable to fetch');

    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({age : 21}).toArray((error, users) => {
    //     console.log(users);
    // });

    db.collection('tasks').findOne({_id: new ObjectId("610c430fd04a3e9110c10a55")}, (error, user) => {

        if (error) {
            return console.log('Unable to fetch');
        }

        console.log(user);
        
    });

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch');
        }

        console.log(tasks);
    });;


});
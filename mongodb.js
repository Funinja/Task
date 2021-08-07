//CRUD: create, read, update delete

const {MongoClient, ObjectId} = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();

console.log(id.id.length);
// console.log(id.getTimestamp());
console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewURLParser : true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne({
        _id : id,
        name: 'Dennis',
        age: 21
    }, (error, result) => {

        if (error) {
            return console.log("Unable to insert user");
        }

        console.log(result.insertedId);

    });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log("Unable to connect to database");
    //     }

    //     console.log(result.insertedIds);

    // })

    // db.collection('tasks').insertMany([{
    //     description: "Gardening",
    //     completed: false
    // },
    // {
    //     description: "Tennis",
    //     completed: false
    // },
    // {
    //     description: "Laundry",
    //     completed: false
    // }], (error, result) => {

    //     if (error){
    //         return console.log("Could not do request");
    //     }

    //     console.log(result.insertedIds);

    // });



});
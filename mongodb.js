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

    db.collection('users').updateOne({
        _id: new ObjectId("610c3ce8e22c6edbee6bdd4f")
    }, {
        $set: {
            name: 'Mike'
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

});
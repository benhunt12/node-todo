// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) { return console.log(err) }
    console.log('Connected to MongoDb Server!');
    const db = client.db('TodoApp');

    // // find one and update
    // db.collection('Todos').findOneAndUpdate({
    //     text: 'eat lunch' // the object _id or field to search for
    // }, {
    //     $set: { // update operators, using $set
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false // options
    // }).then((res) => {
    //     console.log(res);
    // })

    // update name in users
    db.collection('Users').findOneAndUpdate({
        name: 'Ben'
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    client.close();
});
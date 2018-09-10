// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) { return console.log(err) }
    console.log('Connected to MongoDb Server!');
    const db = client.db('TodoApp');

    // delete many
    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
        console.log(res);
    })
    // delete one

    // find one and delete

    client.close();
});
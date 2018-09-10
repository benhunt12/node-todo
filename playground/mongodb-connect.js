// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) { return console.log(err) }
    console.log('Connected to MongoDb Server!');
    
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err) { return console.log(err) }
    //     console.log(res.ops);
    // });

    // db.collection('Users').insertOne({
    //     name: 'Ben',
    //     age: 24,
    //     location: 'Danville CA'
    // }, (err, res) => {
    //     if(err) { return console.log(err) }
    //     console.log(res.ops[0]._id.getTimestamp())
    // });
    

    client.close();
});
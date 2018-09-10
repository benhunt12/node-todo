// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) { return console.log(err) }
    console.log('Connected to MongoDb Server!');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b96cec8c5759f2b451f7e62')
    // }).toArray().then((docs) => {
    //     console.log(docs);
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
        console.log(docs);
    }, (err) => {
        console.log(err);
    });


    client.close();
});
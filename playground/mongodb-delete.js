// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) { return console.log(err) }
    console.log('Connected to MongoDb Server!');
    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });


    // // delete all names with mike
    // db.collection('Users').deleteMany({name: 'Mike'}).then((res) => {
    //     console.log(res);
    // });

    // delete Jen by ID
    db.collection('Users').deleteOne({_id: new ObjectID('5b96d01a2331b32b4fdec04f')}).then((res) => {
        console.log(res);
    });

    client.close();
});
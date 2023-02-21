const mongodb = require('mongodb');

// TO initialize a new connection    instance of the 
const   MongoCli    = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoCli.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Marco',
        age : 25
    })
})

db.collection('users').insertMany([
    {name: 'Marco',  age: 25 },
     { name: 'Jen', age: 28},

    { name: 'Gunther', age: 27}

],(error, result) => {
    if (error) {
        return console.log('Unable to insert documents!')    
    }
    console.log(result.ops)
})
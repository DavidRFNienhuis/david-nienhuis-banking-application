const MongoClient =require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
    console.log('Connected!')

    // Database name

    const dbName = 'myproject';
    const db =client.db(dbName);

    // New User
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // insert into customer table
    var collection = db.collection('customers');
    var doc ={name, email};
    collection.insertOne(doc, {w:1}, function(err, result){
        console.log('document insert')

    });

    var customers = db
    .collection('customers')
    .find()
    .toArray(function(err, docs) {
        console.log('Collection:' , docs);

        //Clean up
        client.close();
    });
});

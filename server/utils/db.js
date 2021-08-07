// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = () => {
//   MongoClient
//     .connect('mongodb+srv://m4rtin:BxybgnQnfZEa7l8s@clusternotes.zbn60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//     .then(client => {
//       console.log('Connected!');
//       _db = client.db();
//     })
//     .catch(error => console.log(error));
// };

// const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;
// const removeV = removeProperty('__v');
// const noV = ({ __v, ...rest }) => rest

// const getDb = () => {
//   if (_db) return _db;
//   throw 'Not found database'
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

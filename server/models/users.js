const ObjectID = require('mongodb').ObjectID;

const getDb = require('../utils/db').getDb;

module.exports = class User {  
  constructor({ name, email, password }) {
    this._id = new ObjectID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
  
  save() {    
    getDb().collection('users').insertOne(this);
    return this;
  }

  static getById (id, cb) {
    getDb().collection('users').find({ _id: new ObjectID(id)}).next()
    .then((user) => cb(
      user || 'User not found'
    ))
    .catch((e) => cb(e));
  }

  static editUser (id, newValues, cb) {
    getDb().collection('users').updateOne({ _id: new ObjectID(id)}, {$set: newValues})
    .then((res) => cb(res))
    .catch((e) => cb(e));
  }

  static deleteUser (id, cb) {
    getDb().collection('users').deleteOne({ _id: new ObjectID(id)})
    .then((res) => cb(res.deletedCount))
    .catch((e) => cb(e));
  }

  static fetchAll (cb) {
    getDb().collection('users').find().toArray()
    .then((usersData) => cb(usersData))
    .catch((e) => cb(e));
  }
}
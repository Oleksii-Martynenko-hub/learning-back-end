// const { v4: uuidv4 } = require('uuid');
// const path = require('path');
// const fs = require('fs');
const ObjectID = require('mongodb').ObjectID;

const getDb = require('../utils/db').getDb;

// const pathUserData = path.join(__dirname, '..', 'data', 'users.json');

// const getDataFromFile = (cb) => {
//   fs.readFile(pathUserData, (err, data) => {
//     if (err) cb([]);

//     cb(JSON.parse(data));
//   });
// }

// const updateData = (newData) => {
//   fs.writeFile(
//     pathUserData,
//     JSON.stringify(newData, null, 2),
//     err => console.log(err),
//   );
// }

module.exports = class User {
  constructor({ name, email, password }) {
    // this._id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    // getDataFromFile((usersData) => {
    //   usersData.push(this);
    //   updateData(usersData);
    // });
    const db = getDb();
    db.collection('users').insertOne(this)

    return this;
  }

  static getById (id, cb) {
    const db = getDb();
    db.collection('users').find({ _id: new ObjectID(id)}).next()
    .then((user) => cb(
      user || 'User not found'
    ))
    .catch((e) => cb(e))

    // getDataFromFile((usersData) => {
    //   cb(usersData.find(user => user.id === id));
    // });
  }

  static editUser (id, newValues, cb) {
    const db = getDb();
    db.collection('users').updateOne({ _id: new ObjectID(id)}, {$set: newValues})
    .then((res) => cb(res))
    .catch((e) => cb(e))
    // getDataFromFile((usersData) => {
    //   const updatedData = usersData.map((user) => {
    //     if (user.id === id) {
    //       const updatedUser = { ...user, ...newValues};
    //       cb(updatedUser);
    //       return updatedUser;
    //     }
    //     return user;
    //   });
    //   updateData(updatedData);
    // });
  }

  static deleteUser (id, cb) {
    const db = getDb();
    db.collection('users').deleteOne({ _id: new ObjectID(id)})
    .then((res) => cb(res.deletedCount))
    .catch((e) => cb(e))
  //   getDataFromFile((usersData) => {
  //     const dataWithoutUser = usersData.filter(user => user.id !== id);
  //     const isUserDelete = dataWithoutUser.find(user => user.id === id);
  //     if (!isUserDelete) updateData(dataWithoutUser);
  //     cb(!isUserDelete);
  //   });
  }

  static fetchAll (cb) {
    const db = getDb();
    db.collection('users').find().toArray()
    .then((usersData) => cb(usersData))
    .catch((e) => console.log(e))
    // getDataFromFile((usersData) => cb(usersData));
  }
}
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const rootDir = require('../utils/rootDir');

const usersData = require('../data/users.json');

module.exports = class User {
  constructor({ name, email, password }) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    const newUser = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password
    }
    // usersData.push(newUser)

    // fs.writeFileSync(
    //   path.join(rootDir, 'server', 'data', 'users.json'),
    //   JSON.stringify(usersData, null, 2)
    // );

    return newUser;
  }

  static getById (id) {
    return usersData;
  }

  static fetchAll () {
    return usersData;
  }
}
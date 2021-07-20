const UserRepository = require('./UserRepository')
const APIcalls = require('./apiCalls') // do we need API calls here?

class User {
  constructor(userData) {
    this.user = userData;
  };

  returnFirstName() {
    let firstName = this.user.name.split(' ');
    return firstName[0];
  };
};

module.exports = User;

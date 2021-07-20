const APIcalls = require('./apiCalls')
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

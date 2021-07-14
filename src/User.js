const UserRepository = require('./UserRepository')
const APIcalls = require('./apiCalls')

class User {
  constructor(userRepo) {
    this.user = userRepo
  }

  returnFirstName(user) {
    let firstName = user.split(' ')
    return firstName[0]
  }

}

module.exports = User;

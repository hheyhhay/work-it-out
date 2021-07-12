const UserRepository = require('./UserRepository')

class User {
  constructor(userRepo) {
    this.user = userRepo
  }

  returnFirstName() {
    let firstName = this.user.users.find((user) => {
      console.log(user.name)
    })
    return firstName
  }

}

module.exports = User;

const UserRepository = require('./UserRepository')
const APIcalls = require('./apiCalls')

class User {
  constructor(userData) { // the argument should be a single user?
    this.user = userData; // userData will be an single object from the repository
    //ex: {id: 1, name: "Luisa Hane", address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697", email: "Diana.Hayes1@hotmail.com", strideLength: 4.3, …}
  }

  returnFirstName() {
    let firstName = this.user.name.split(' ')
    return firstName[0]
  }


}

module.exports = User;

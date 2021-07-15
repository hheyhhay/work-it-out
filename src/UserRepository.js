class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  getUserbyID(userID) { // update so it will work!
    // console.log(userID)
    // console.log(typeof this.users);
    // let entries = Object.entries(this.users);
    // console.log('.entries', entries)
    // console.log('.values', Object.entries(this.users))


    this.users.find((user) => {
      console.log('user')
      if(user.id === userID) {
        user.id === userID // return what?
        console.log(userID)

        return user // hd updated
      }
    })
  }

  averageStepGoal() {
    let averageSteps = this.users.reduce((average, user) => {
      average += user.dailyStepGoal
      return average
    }, 0) / this.users.length
    return averageSteps
  }
}

module.exports = UserRepository;

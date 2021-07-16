class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  getUserByID(userID) {

    let selectedUser = this.users.find((user) => {
      if(user.id === userID) {
        return user
      }
    })
    return selectedUser
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

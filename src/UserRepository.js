class UserRepository {
  constructor(userData) {
    this.users = userData
  }

  getUserbyID(userID) {
    this.users.find((user) => {
      return user.id === userID
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

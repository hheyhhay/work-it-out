class Sleep {
  constructor(sleepData) {
    this.userSleepData = sleepData
  }

  averageHoursOfSleep(id){
    const userSleep = this.userSleepData.filter((user) => user.userID === id);
      let sum = 0;
        userSleep.forEach((user) => {sum += user.hoursSlept});
          return Number((sum / userSleep.length).toFixed(1));
  }

  averageQualityOfSleep(id){
    const userSleep = this.userSleepData.filter((user) => user.userID === id);
      let sum = 0;
        userSleep.forEach((user) => {sum += user.sleepQuality});
          return Number((sum / userSleep.length).toFixed(1));
  }

  findSleepDay(id, date) {
    const userSleep = this.userSleepData.filter((user) => user.userID === id)
    .filter((user) => user.date === date);
    return userSleep[0].hoursSlept
  }

  findSleepQualityDay(id, date) {
    const userSleep = this.userSleepData.filter((user) => user.userID === id)
    .filter((user) => user.date === date);
    return userSleep[0].sleepQuality
  }

  findSleepWeek(id, date) {
    const userSleep = this.userSleepData.filter((user) => user.userID === id)
    .find((user) => user.date === date);

    console.log(userSleep)

  }

}

module.exports = Sleep;

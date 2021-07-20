var dayjs = require('dayjs')

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
      .find((user) => user.date === date);
      return userSleep.hoursSlept
  }



  findSleepQualityDay(id, date) {
    const userSleep = this.userSleepData.filter((user) => user.userID === id)
    .find((user) => user.date === date);
        return userSleep.sleepQuality
  }

  findSleepWeek(id, date) {
    let sevenDaysData = [];
    sevenDaysData.push(date)
    let i = 0;

    do {
      i++;
      sevenDaysData.push((dayjs(date).subtract(i, 'day').format('YYYY/MM/DD')))
   } while (i < 6);

   let returnSleepQuality = this.userSleepData.reduce((acc, userData, index) => {
     if (userData.userID === id && sevenDaysData.includes(userData.date)) {
       acc.unshift(userData.hoursSlept)
     } else if (userData.userID === id && !sevenDaysData.includes(userData.date)) {
       acc.unshift('null')
     }
       return acc
     }, [])
     return returnSleepQuality
  }

  findSleepQualityWeek(id, date) {
    const userSleep = this.userSleepData.filter((user) => user.userID === id)
    .find((user) => user.date === date);

    let sevenDaysData = [];
    sevenDaysData.push(date)
    let i = 0;

    do {
      i++;
      sevenDaysData.push((dayjs(date).subtract(i, 'day').format('YYYY/MM/DD')))
   } while (i < 7);

     let returnSleepQuality = this.userSleepData.reduce((acc, userData, index) => {
       if (userData.userID === id && sevenDaysData.includes(userData.date)) {
         acc.unshift(userData.sleepQuality)
       } else if (userData.userID === id && !sevenDaysData.includes(userData.date)) {
         acc.unshift('null')
       }
         return acc
       }, [])
       return returnSleepQuality
    }

  averageAllTimeHoursOfSleep(){
    let sum = 0;
      const userSleep = this.userSleepData.forEach((user) => {sum += user.hoursSlept});
        return (Number((sum / this.userSleepData.length).toFixed(1)))
  }

}

module.exports = Sleep;

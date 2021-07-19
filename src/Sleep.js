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
    //this one will return hoursSlept, hopefully
    let sevenDaysData = [];
    sevenDaysData.push(date)
    let i = 0;

    do {

      i++;

      sevenDaysData.push((dayjs(date).subtract(i, 'day').format('YYYY/MM/DD')))
   } while (i < 6);


   let returnHoursSlept = this.userSleepData.reduce((acc, userData, index) => {
     if (userData.userID === id && sevenDaysData.includes(userData.date)) {
       acc.unshift(userData.hoursSlept)
       }
       return acc
     }, [])
     return returnHoursSlept

  }

  findSleepQualityWeek(id, date) {
    const userSleep = this.userSleepData.filter((user) => user.userID === id)
    .find((user) => user.date === date);

    let sevenDaysData = [];
    sevenDaysData.push(date)
    let i = 0;

    do {
      i++;
      sevenDaysData.push((dayjs(userSleep.date).add(i, 'day').format('YYYY/MM/DD')))
   } while (i < 7);

     let returnSleepQuality = this.userSleepData.reduce((acc, userData, index) => {
       if (userData.userID === id && sevenDaysData.includes(userData.date)) {
         acc.unshift(userData.sleepQuality)
         }
         return acc
       }, [])
       return returnSleepQuality
    }

  averageAllTimeHoursOfSleep(userSleepData){
    let average = userSleepData.reduce((acc, userSleepData) => {
      acc += userSleepData.hoursSlept
      return acc
    }, 0)/userSleepData.length
    return Number(average).toFixed(1)
  }

}



module.exports = Sleep;

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
      i = i + 1;
      sevenDaysData.push((dayjs(date).add(i, 'day').format('YYYY/MM/DD')))
   } while (i < 6);

console.log(sevenDaysData)
   let returnHoursSlept = this.userSleepData.reduce((acc, userData, index) => {
     if (userData.userID === id && sevenDaysData.includes(userData.date)) {
       acc.push(userData.hoursSlept)
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
      i = i + 1;
      sevenDaysData.push((dayjs(userSleep.date).add(i, 'day').format('YYYY/MM/DD')))
   } while (i < 7);

     let returnSleepQuality = this.userSleepData.reduce((acc, userData, index) => {
       if (userData.userID === id && sevenDaysData.includes(userData.date)) {
         acc.push(userData.sleepQuality)
         }
         return acc
       }, [])
       return returnSleepQuality
    }

  }



module.exports = Sleep;

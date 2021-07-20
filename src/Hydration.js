var dayjs = require('dayjs');

class Hydration {
  constructor(hydrationData) {
    this.hydroData = hydrationData;
  }

  averageWater(userID){
    let foundUser = this.hydroData.filter((user) => {
      return user.userID === userID;
    })

    let averageWater = foundUser.reduce((acc, currentValue) => {
      acc = acc + currentValue.numOunces;
      return acc;
    }, 0)

    averageWater = Number((averageWater/foundUser.length).toFixed(1));

    return averageWater;
  }

    waterByDate(date, userID) {
      let foundUser = this.hydroData.filter((user) => user.userID === userID ).find((user) => user.date === date)
      return foundUser.numOunces;
    };

    weeklyWaterTotal(date, userID) {

      let sevenDays = [];
      sevenDays.push(date);
      let i = 0;

      do {
        i++
        sevenDays.push((dayjs(date).subtract(i, 'day').format('YYYY/MM/DD')));
      } while (i < 6);

      let weekWaterData = this.hydroData.reduce((acc, userData, index) => {
        userData.userID === userID  && sevenDays.includes(userData.date)
         acc.unshift(userData.numOunces)
        return acc;
      }, [])
      return weekWaterData;
    }

};


module.exports = Hydration;

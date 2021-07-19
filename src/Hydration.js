var dayjs = require('dayjs');

class Hydration {
  constructor(hydrationData) {
    this.hydroData = hydrationData;
  }

  averageWater(userID){
    let foundUser = this.hydroData.filter((user) => { // could be built in as helper function?
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
      let i = 0;

      // let userWater = this.hydroData.filter((user) => user.userID === userID).find((user) => user.date === date);
      // do not need to find user, it is already found in the conditional userID === userID
      do {
        i++
        sevenDays.push(date); // needed to save current date
        sevenDays.push((dayjs(date).add(i, 'day').format('YYYY/MM/DD')));

      } while (i < 6) // changed to 6 to not have it add 7 days ontop of the current date already pushed.

      let weekWaterData = this.hydroData.reduce((acc, userData, index) => {
        // console.log(userData)
        if (userData.userID === userID  && sevenDays.includes(userData.date)) {
          acc.push(userData.numOunces)
        }
        return acc;
      }, [])

      return weekWaterData;
    }


};


module.exports = Hydration;

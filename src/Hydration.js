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
      // the date, and the 6 previous dates, stored in an... aray of objects?
      // key of date value of amount of waterByDate
      // I believe use map since we are returning an array of the same amount,

      let foundUser = this.hydroData.filter((user) => user.userID === userID).map((user) => {
        let newObj = {};
        newObj['date'] = user.date;
        newObj['numOunces'] = user.numOunces;
        return newObj;
      })
      return foundUser
    }


};


module.exports = Hydration;

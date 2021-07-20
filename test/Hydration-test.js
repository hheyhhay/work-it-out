import { expect } from 'chai';
import Sleep from '../src/Sleep';

const Hydration = require('../src/Hydration')

describe('Hydration', () => {

  let hydrationData;
  let hydration;

  beforeEach(() => {
    hydrationData = [
      {userID: 1, date: "2019/06/15", numOunces: 37},
      {userID: 1, date: "2019/06/16", numOunces: 69},
      {userID: 1, date: "2019/06/17", numOunces: 96},
      {userID: 1, date: "2019/06/18", numOunces: 61},
      {userID: 1, date: "2019/06/19", numOunces: 91},
      {userID: 1, date: "2019/06/20", numOunces: 50},
      {userID: 1, date: "2019/06/21", numOunces: 50},
      {userID: 2, date: "2019/06/15", numOunces: 75},
      {userID: 2, date: "2019/06/16", numOunces: 91},
      {userID: 2, date: "2019/06/17", numOunces: 96},
      {userID: 2, date: "2019/06/18", numOunces: 70},
      {userID: 2, date: "2019/06/19", numOunces: 76},
      {userID: 2, date: "2019/06/20", numOunces: 71},
      {userID: 2, date: "2019/06/21", numOunces: 27}
    ]
    hydration = new Hydration(hydrationData)
  });

  it('should intantiate with an array of objects', () => {


    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should find average fluid ounces per day for a specified user', () => {

    expect(hydration.averageWater(1)).to.equal(64.9);
  });

  it('should find amount of fluid ounces consumed on specific date', () => {
     expect(hydration.waterByDate("2019/06/19", 2)).to.equal(76);
  });

  it('should be able keep track of how much water is drinken each day for a week', () => {
    expect(hydration.weeklyWaterTotal("2019/06/21", 1)).to.deep.equal([ 50, 50, 91, 61, 96, 69, 37])
  })

  it('should be able to keep track with a larger data set', () => {
    hydrationData = [
      {userID: 1, date: "2019/06/15", numOunces: 37},
      {userID: 1, date: "2019/06/16", numOunces: 69},
      {userID: 1, date: "2019/06/17", numOunces: 96},
      {userID: 1, date: "2019/06/18", numOunces: 61},
      {userID: 1, date: "2019/06/19", numOunces: 91},
      {userID: 1, date: "2019/06/20", numOunces: 50},
      {userID: 1, date: "2019/06/21", numOunces: 50},
      {userID: 2, date: "2019/06/15", numOunces: 75},
      {userID: 2, date: "2019/06/16", numOunces: 91},
      {userID: 2, date: "2019/06/17", numOunces: 96},
      {userID: 2, date: "2019/06/18", numOunces: 70},
      {userID: 2, date: "2019/06/19", numOunces: 76},
      {userID: 2, date: "2019/06/20", numOunces: 71},
      {userID: 2, date: "2019/06/21", numOunces: 27},
      {userID: 2, date: "2019/06/22", numOunces: 58},
      {userID: 2, date: "2019/06/23", numOunces: 44},
      {userID: 2, date: "2019/06/24", numOunces: 33}
    ]

    hydration = new Hydration(hydrationData)

    expect(hydration.weeklyWaterTotal("2019/06/23", 2)).to.deep.equal([ 44, 58, 27, 71, 76, 70, 96])

  });



})

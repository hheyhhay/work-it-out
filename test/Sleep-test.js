import { expect } from 'chai';
import Sleep from '../src/Sleep';

const User = require('../src/User')

describe('Sleep', () => {
  it('should be a function', () => {
    expect(Sleep).to.be.a('function')
  });

  it('should be an instance of Sleep', () => {
    const newSleepData = new Sleep();
    expect(newSleepData).to.be.an.instanceOf(Sleep);
  });

//5 days of data
  it('should return the average number of hours slept per day', () => {
    const newSleepData = new Sleep([
    {"userID":1,"date":"2019/06/17","hoursSlept":5.1,"sleepQuality":3.2},
    {"userID":2,"date":"2019/06/17","hoursSlept":7.6,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},
    {"userID":1,"date":"2019/06/18","hoursSlept":9.8,"sleepQuality":2.6},
    {"userID":2,"date":"2019/06/18","hoursSlept":5.9,"sleepQuality":2.5},
    {"userID":1,"date":"2019/06/18","hoursSlept":5.2,"sleepQuality":4.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":5.5,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/18","hoursSlept":8.2,"sleepQuality":2.4}
  ]);
  expect(newSleepData.averageHoursOfSleep(1)).to.equal(7.2)
  });

  it('should return the average sleep quality per night over all time', () => {
    const newSleepData = new Sleep([
    {"userID":1,"date":"2019/06/17","hoursSlept":5.1,"sleepQuality":3.2},
    {"userID":2,"date":"2019/06/17","hoursSlept":7.6,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},
    {"userID":1,"date":"2019/06/18","hoursSlept":9.8,"sleepQuality":2.6},
    {"userID":2,"date":"2019/06/18","hoursSlept":5.9,"sleepQuality":2.5},
    {"userID":1,"date":"2019/06/18","hoursSlept":5.2,"sleepQuality":4.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":5.5,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/18","hoursSlept":8.2,"sleepQuality":2.4}
  ]);
  expect(newSleepData.averageQualityOfSleep(1)).to.equal(2.9)
  });


  it('should return the hours they slept on a specific day', () => {
    const newSleepData = new Sleep([
    {"userID":1,"date":"2019/06/17","hoursSlept":5.1,"sleepQuality":3.2},
    {"userID":2,"date":"2019/06/17","hoursSlept":7.6,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},
    {"userID":1,"date":"2019/06/19","hoursSlept":9.8,"sleepQuality":2.6},
    {"userID":2,"date":"2019/06/19","hoursSlept":5.9,"sleepQuality":2.5},
    {"userID":1,"date":"2019/06/20","hoursSlept":5.2,"sleepQuality":4.1},
    {"userID":2,"date":"2019/06/20","hoursSlept":5.5,"sleepQuality":4},
    {"userID":1,"date":"2019/06/21","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/21","hoursSlept":8.2,"sleepQuality":2.4}
  ]);
  expect(newSleepData.findSleepDay(2, "2019/06/18")).to.equal(10.8)
  });

  it('should return the quality of sleep on a specific day', () => {
    const newSleepData = new Sleep([
    {"userID":1,"date":"2019/06/17","hoursSlept":5.1,"sleepQuality":3.2},
    {"userID":2,"date":"2019/06/17","hoursSlept":7.6,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},
    {"userID":1,"date":"2019/06/19","hoursSlept":9.8,"sleepQuality":2.6},
    {"userID":2,"date":"2019/06/19","hoursSlept":5.9,"sleepQuality":2.5},
    {"userID":1,"date":"2019/06/20","hoursSlept":5.2,"sleepQuality":4.1},
    {"userID":2,"date":"2019/06/20","hoursSlept":5.5,"sleepQuality":4},
    {"userID":1,"date":"2019/06/21","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/21","hoursSlept":8.2,"sleepQuality":2.4}
  ]);
  expect(newSleepData.findSleepQualityDay(1, "2019/06/21")).to.equal(1.4)
  });



//7 days of data
  it('should return hours slept over the course of a given week (7 Days)', () => {
    const newSleepData = new Sleep([
    {"userID":1,"date":"2019/06/17","hoursSlept":5.1,"sleepQuality":3.2},
    {"userID":2,"date":"2019/06/17","hoursSlept":7.6,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},
    {"userID":1,"date":"2019/06/19","hoursSlept":9.8,"sleepQuality":2.6},
    {"userID":2,"date":"2019/06/19","hoursSlept":5.9,"sleepQuality":2.5},
    {"userID":1,"date":"2019/06/20","hoursSlept":5.2,"sleepQuality":4.1},
    {"userID":2,"date":"2019/06/20","hoursSlept":5.5,"sleepQuality":4},
    {"userID":1,"date":"2019/06/21","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/21","hoursSlept":8.2,"sleepQuality":2.4},
    {"userID":1,"date":"2019/06/22","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/22","hoursSlept":8.2,"sleepQuality":2.4},
    {"userID":1,"date":"2019/06/23","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/23","hoursSlept":8.2,"sleepQuality":2.4},

  ]);
<<<<<<< HEAD
  expect(newSleepData.findSleepWeek(1, "2019/06/23")).to.deep.equal([5.5, 5.5, 5.5, 5.5, 5.2, 9.8, 10.4])

=======
  console.log('here?')
  expect(newSleepData.findSleepWeek(1, "2019/06/23")).to.deep.equal([5.5, 5.5, 5.5, 5.2, 9.8, 10.4, 5.1])
>>>>>>> main

  });

  it('should return sleep quality over the course of a given week (7 Days)', () => {
    const newSleepData = new Sleep([
    {"userID":1,"date":"2019/06/17","hoursSlept":5.1,"sleepQuality":3.2},
    {"userID":2,"date":"2019/06/17","hoursSlept":7.6,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},
    {"userID":1,"date":"2019/06/19","hoursSlept":9.8,"sleepQuality":2.6},
    {"userID":2,"date":"2019/06/19","hoursSlept":5.9,"sleepQuality":2.5},
    {"userID":1,"date":"2019/06/20","hoursSlept":5.2,"sleepQuality":4.1},
    {"userID":2,"date":"2019/06/20","hoursSlept":5.5,"sleepQuality":4},
    {"userID":1,"date":"2019/06/21","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/21","hoursSlept":8.2,"sleepQuality":2.4},
    {"userID":1,"date":"2019/06/22","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/22","hoursSlept":8.2,"sleepQuality":2.4},
    {"userID":1,"date":"2019/06/23","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/23","hoursSlept":8.2,"sleepQuality":2.4}
  ]);
  expect(newSleepData.findSleepQualityWeek(1, "2019/06/17")).to.deep.equal([3.2, 3.1, 2.6, 4.1, 1.4, 1.4, 1.4])

  });

  it('should return all time average of all users combined', () => {
    const newSleepData = new Sleep([
    {"userID":1,"date":"2019/06/17","hoursSlept":5.1,"sleepQuality":3.2},
    {"userID":2,"date":"2019/06/17","hoursSlept":7.6,"sleepQuality":4},
    {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
    {"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},
    {"userID":1,"date":"2019/06/19","hoursSlept":9.8,"sleepQuality":2.6},
    {"userID":2,"date":"2019/06/19","hoursSlept":5.9,"sleepQuality":2.5},
    {"userID":1,"date":"2019/06/20","hoursSlept":5.2,"sleepQuality":4.1},
    {"userID":2,"date":"2019/06/20","hoursSlept":5.5,"sleepQuality":4},
    {"userID":1,"date":"2019/06/21","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/21","hoursSlept":8.2,"sleepQuality":2.4},
    {"userID":1,"date":"2019/06/22","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/22","hoursSlept":8.2,"sleepQuality":2.4},
    {"userID":1,"date":"2019/06/23","hoursSlept":5.5,"sleepQuality":1.4},
    {"userID":2,"date":"2019/06/23","hoursSlept":8.2,"sleepQuality":2.4}
  ]);
  expect(newSleepData.findSleepQualityWeek(newSleepData)).to.equal(7.2)

  });

});

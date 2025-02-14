import { expect } from 'chai';
import Sleep from '../src/Sleep';



describe('Sleep', () => {

  let newSleepData
    beforeEach(() => {
    newSleepData = new Sleep([
      { "userID":1, "date":"2019/06/17", "hoursSlept":5.1, "sleepQuality":3.2 },
      { "userID":2, "date":"2019/06/17", "hoursSlept":7.6, "sleepQuality":4 },
      { "userID":1, "date":"2019/06/18", "hoursSlept":10.4, "sleepQuality":3.1 },
      { "userID":2, "date":"2019/06/18", "hoursSlept":10.8, "sleepQuality":3.2 },
      { "userID":1, "date":"2019/06/19", "hoursSlept":9.8, "sleepQuality":2.6 },
      { "userID":2, "date":"2019/06/19", "hoursSlept":5.9, "sleepQuality":2.5 },
      { "userID":1, "date":"2019/06/20", "hoursSlept":5.2, "sleepQuality":4.1 },
      { "userID":2, "date":"2019/06/20", "hoursSlept":5.5, "sleepQuality":4 },
      { "userID":1, "date":"2019/06/21", "hoursSlept":5.5, "sleepQuality":1.4 },
      { "userID":2, "date":"2019/06/21", "hoursSlept":8.2, "sleepQuality":2.4 },
      { "userID":1, "date":"2019/06/22", "hoursSlept":5.5, "sleepQuality":1.4 },
      { "userID":2, "date":"2019/06/22", "hoursSlept":8.2, "sleepQuality":2.4 },
      { "userID":1, "date":"2019/06/23", "hoursSlept":5.5, "sleepQuality":1.4 },
      { "userID":2, "date":"2019/06/23", "hoursSlept":8.2, "sleepQuality":2.4}
    ])
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function')
  });

  it('should be an instance of Sleep', () => {
    expect(newSleepData).to.be.an.instanceOf(Sleep);
  });

  it('should return the average number of hours slept per day', () => {
    expect(newSleepData.averageHoursOfSleep(1)).to.equal(6.7)
  });

  it('should return the average sleep quality per night over all time', () => {
    expect(newSleepData.averageQualityOfSleep(1)).to.equal(2.5)
  });

  it('should return the hours they slept on a specific day', () => {
    expect(newSleepData.findSleepDay(2, "2019/06/18")).to.equal(10.8)
  });

  it('if day is not on the calendar return null', () => {
    expect(newSleepData.findSleepDay(1, "2021/1/21")).to.equal(null)
  });

  it('should return the quality of sleep on a specific day', () => {
    expect(newSleepData.findSleepQualityDay(1, "2019/06/21")).to.equal(1.4)
  });

  it('should return hours slept over the course of a given week (7 Days)', () => {
    expect(newSleepData.findSleepWeek(2, "2019/06/23")).to.deep.equal([8.2, 8.2, 8.2, 5.5, 5.9, 10.8, 7.6])
  });

  it('should return null if dates are outside of date range  (7 Days)', () => {
    expect(newSleepData.findSleepWeek(1, "2020/01/19")).to.deep.equal([null, null, null, null, null, null, null])
  });

  it('should return sleep quality over the course of a given week (7 Days)', () => {
    expect(newSleepData.findSleepQualityWeek(2, "2019/06/23")).to.deep.equal([2.4, 2.4, 2.4, 4, 2.5, 3.2, 4])
  });

  it('should return null if dates are outside of date range  (7 Days)', () => {
    expect(newSleepData.findSleepQualityWeek(1, "2020/01/19")).to.deep.equal([null, null, null, null, null, null, null])
  });

  it('should return all time average of all users combined', () => {
    expect(newSleepData.averageAllTimeHoursOfSleep(newSleepData)).to.equal(7.2)
  });

});

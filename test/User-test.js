import { expect } from 'chai';
import User from '../src/User';


const UserRepository = require('../src/UserRepository')

describe('User', () => {
  it('should be a function', () => {
    expect(User).to.be.a('function')
  });

  it('should return a users first name only', () => {
    const userRepo = new UserRepository([{
      "id": 6,
      "name": "Gladys Bogisich",
      "address": "8283 Carroll Harbor, Borerfort CT 69020-3448",
      "email": "Mercedes_Zboncak53@yahoo.com",
      "strideLength": 3.7,
      "dailyStepGoal": 11000,
      "friends": [
        11,
        48,
        15
      ]
    },
    {
      "id": 7,
      "name": "Breanne Fay",
      "address": "834 Retta Knoll, Stantonland MA 71627-4121",
      "email": "Dashawn28@gmail.com",
      "strideLength": 2.9,
      "dailyStepGoal": 8000,
      "friends": [
        12,
        27,
        22,
        30
      ]
    }])

    const user = new User(userRepo.users[0]);
    expect(user.returnFirstName()).to.equal('Gladys')
  })


});

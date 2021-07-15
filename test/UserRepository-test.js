import {
  expect
} from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepository([{
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [16, 4, 8]
      },

      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
         "friends": [9, 18, 24, 19]
      }
    ])
  })


  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of the user repository and should be an array', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should show user data by ID', () => {
    // console.log(userRepo.getUserbyID(1))
    // console.log('userRepo[0]', userRepo[0])
    // console.log(userRepo)
    expect(userRepo.getUserbyID(1)).to.deep.equal(userRepo[0])
  })

  it('should show average steps amongst of all users', () => {
    console.log(userRepo.averageStepGoal())
    console.log('userRepo.length', userRepo.length)
    console.log('userRepo', userRepo)
    console.log('userRepo.users', userRepo.users)
    expect(userRepo.averageStepGoal()).to.equal(7500)
  })

});

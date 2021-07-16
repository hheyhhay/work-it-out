//🏎 Imports🏎
import './css/styles.css';
// import {userData} from './data/users'; // won't need b/c its
import UserRepository from './UserRepository';
import User from './User';
import {userData, sleepData, activityData, hydrationData} from './apiCalls';

//🌍  Global Variables 🌍 ///

//I don't think these need to be global
let userDataArray;
let sleepDataArray;
let activityDataArray;
let hydrationDataArray;

let userRepo;
let user;



//👂🏽 Event Listeners 👂🏽
window.addEventListener('load', fetchData) // should stay here, don't forget annoymous functin





//✨ Functions ✨
function fetchData() { // this function should be in apiCalls apiCalls.userData().then((promise) => store user data, insantiate userRepo, then instantiate newUser)
  Promise.all([userData(), sleepData(), activityData(), hydrationData()]).then((values) =>
    parseValues(values))
};

function parseValues(values) {


  userDataArray = values[0].userData
  sleepDataArray = values[1].sleepData;
  activityDataArray = values[2].activityData
  hydrationDataArray = values[3].hydrationData

  instantiation();
  console.log(userRepo);
  console.log(user)
}

function instantiation(){
  userRepo = new UserRepository(userDataArray);
  user = new User(userRepo);

};


/// All DOM Minipulation here -> move to seprate file

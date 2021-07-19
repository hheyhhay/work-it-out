//🏎 Imports🏎
//---for day.js npm package do not delete---
var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()
//-----
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

let bodySection = document.getElementById("body");
let greeting = document.getElementById('greeting')

//👂🏽 Event Listeners 👂🏽
window.addEventListener('load', fetchData) // should stay here, don't forget annoymous functin




//✨ Functions ✨
function fetchData() { // this function should be in apiCalls apiCalls.userData().then((promise) => store user data, insantiate userRepo, then instantiate newUser)
  Promise.all([userData(), sleepData(), activityData(), hydrationData()]).then((values) =>
    parseValues(values))
};

function parseValues(values) {


  userDataArray = values[0].userData;
  sleepDataArray = values[1].sleepData;
  activityDataArray = values[2].activityData;
  hydrationDataArray = values[3].hydrationData;

  // let dayJS = dayjs('2018-08-08');
  // console.log(dayJS)
  instantiation();
  renderUser();
  // console.log('sleep', findUserData(sleepDataArray, 2));
  console.log('hydration', findUserData(hydrationDataArray, 40))
  console.log('sleep', findUserData(sleepDataArray, 40))
  console.log('user', findUserData(userDataArray, 40))
  console.log(userRepo);
  console.log(user)
}

function findUserData(array, userNumber) {
  let dataArray = [];
  const foundUser = array.filter((user) => {
    if( user.userID === userNumber ) {
      dataArray.push(user)
    }
  })
  return dataArray
}



function instantiation(){
  let i = Math.floor(Math.random()*50); // i is index. // check that its 0 - 49
  userRepo = new UserRepository(userDataArray);
  user = new User(userRepo.users[i]);
  console.log(user.returnFirstName())
  console.log(userRepo.averageStepGoal())
  console.log(userRepo.getUserByID(5))
};



/// All DOM Minipulation here -> move to seprate file
function renderUser() {
let greetingHTML = `<h1 id = "greeting" > hello, ${user.returnFirstName()} </h1>`
greeting.innerHTML = greetingHTML;
}

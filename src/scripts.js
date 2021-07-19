//🏎 Imports🏎
//---for day.js npm package do not delete---
var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()
//-----
import './css/styles.css';
// import {userData} from './data/users'; // won't need b/c its
import Hydration from './Hydration';
import Sleep from './Sleep';
import User from './User';
import UserRepository from './UserRepository';
import {userData, sleepData, activityData, hydrationData} from './apiCalls';

//🌍  Global Variables 🌍 ///

//I don't think these need to be global
let userDataArray;
let sleepDataArray;
let activityDataArray;
let hydrationDataArray;

let userRepo;
let user;
let hydration;
let sleep
let startDate

let bodySection = document.getElementById('body');
let greeting = document.getElementById('greeting');
let name = document.getElementById('name');
let address = document.getElementById('address');
let email = document.getElementById('email');
let stepGoals = document.getElementById('stepGoals');
let waterStats = document.getElementById('waterStats')
let sleepStats = document.getElementById('sleepStats')
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
  console.log(sleepDataArray)
  instantiation();
  renderUser();
  showName(); //<<< had to put this here, could not use user or userRepo variables unless it was in here 🤷🏽‍♀️ would not work making new window event listener
  showAddress();
  showEmail();
  showStepGoals();
  showWaterConsumed()
  showSleep()
  console.log(userRepo)
  console.log(user)
}

function instantiation(){
  let i = Math.floor(Math.random()*50); // i is index. // check that its 0 - 49
  userRepo = new UserRepository(userDataArray);
  user = new User(userRepo.users[i]);
  hydration = new Hydration(hydrationDataArray);
  sleep = new Sleep(sleepDataArray)
//<------need a function to generate a random date-------->
  console.log(user.returnFirstName())
  console.log(userRepo.averageStepGoal())
  console.log(userRepo.getUserByID(5))
  console.log(user)
};




/// All DOM Minipulation here -> move to seprate file
function renderUser() {
let greetingHTML = `Hello, ${user.returnFirstName()}!`
greeting.innerHTML = greetingHTML;
}

function showName() {
  name.innerHTML = `${user.user.name}`
}

function showAddress() {
  address.innerHTML = `${user.user.address}`
}

function showEmail() {
  email.innerHTML = `${user.user.email}`
}

function showStepGoals() {
  stepGoals.innerHTML = `Your Daily Step Goal: ${user.user.dailyStepGoal} <br>
  All Users Step Goals: ${userRepo.averageStepGoal()}`
}

function showWaterConsumed() {
  waterStats.innerHTML = `Your Daily Water Consumption: ${hydration.waterByDate("2019/07/30", user.user.id)} <br>
  Your Weekly Water Consumption: ${hydration.weeklyWaterTotal("2019/07/30", user.user.id)}`
}

function showSleep() {
  sleepStats.innerHTML = `Your Daily Sleep: ${sleep.findSleepDay(user.user.id, "2019/07/30")} <br>
  Your Weekly Sleep: ${sleep.findSleepWeek(user.user.id, "2019/07/30")} <br>
  All Time User Average of Sleep: ${sleep.averageAllTimeHoursOfSleep(sleepDataArray)}`
}

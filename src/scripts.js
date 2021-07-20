//🏎 Imports🏎
//---for day.js npm package do not delete---
var dayjs = require('dayjs')
// var chartjs = require('chart.js');
//import dayjs from 'dayjs' // ES 2015
dayjs().format()
var chart
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
let friends = document.getElementById('friends')
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
let greetingHTML = `☀️ Hello, ${user.returnFirstName()}! ☀️`
greeting.innerHTML = greetingHTML;
}



function showAddress() {
  address.innerHTML = `<b>address:</b> ${user.user.address}`;
}

function showEmail() {
  email.innerHTML = `<b>email:</b> ${user.user.email}`;
}

function showStepGoals() {
  stepGoals.innerHTML = `Your Daily Step Goal is ${user.user.dailyStepGoal}. Most people's Step Goal is ${userRepo.averageStepGoal()}`
}

function showWaterConsumed() {
  waterStats.innerHTML = `Today, you drank ${hydration.waterByDate("2019/07/30", user.user.id)} liters`
}

function showSleep() {
  sleepStats.innerHTML = `Last night, you slept ${sleep.findSleepDay(user.user.id, "2019/07/30")} hours.
  Most nights, you sleep ${sleep.averageHoursOfSleep(user.user.id)} hours with a quality of${sleep.averageQualityOfSleep(user.user.id)} out of 5.`
}

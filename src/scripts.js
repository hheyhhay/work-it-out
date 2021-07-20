//🏎 Imports🏎
var dayjs = require('dayjs')
dayjs().format()
//-----
import'./css/styles.css';
// import {userData} from './data/users'; // won't need b/c its
import Hydration from './Hydration';
import Sleep from './Sleep';
import User from './User';
import UserRepository from './UserRepository';
import {userData, sleepData, activityData, hydrationData} from './apiCalls';
import {renderInfo} from './dom';
//🌍  Global Variables 🌍 ///

//I don't think these need to be global
let userDataArray;
let sleepDataArray;
let activityDataArray;
let hydrationDataArray;

export let userRepo;
export let user;
export let hydration;
export let sleep
export let startDate


//👂🏽 Event Listeners 👂🏽
window.addEventListener('load', fetchData);

//✨ Functions ✨

function fetchData() {
  Promise.all([userData(), sleepData(), activityData(), hydrationData()]).then((values) =>
    parseValues(values))
};

function parseValues(values) {

  userDataArray = values[0].userData;
  sleepDataArray = values[1].sleepData;
  activityDataArray = values[2].activityData;
  hydrationDataArray = values[3].hydrationData;
  instantiation();
  renderInfo();
}

function instantiation(){
  let i = Math.floor(Math.random()*50);
  userRepo = new UserRepository(userDataArray);
  user = new User(userRepo.users[i]);
  hydration = new Hydration(hydrationDataArray);
  sleep = new Sleep(sleepDataArray)

};

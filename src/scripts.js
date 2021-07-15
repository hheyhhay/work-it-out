//🏎 Imports🏎
import './css/styles.css';
import userData from './data/users';
import UserRepository from './UserRepository';
import {getData, sleepData, activityData} from './apiCalls';

//👂🏽 Event Listeners 👂🏽
window.addEventListener('load', fetchData)

//🌍  Global Variables 🌍
let userDataArray = [];
let sleepDataArray = [];
let activityDataArray = [];
let hydrationDataArray = [];

//✨ Functions ✨
function fetchData() {
  Promise.all([getData(), sleepData(), activityData()]).then((values) =>
    parseValues(values))
};

function parseValues(values) {
  values[0].userData.forEach((value) => {
    userDataArray.push(value)
  })
  values[1].sleepData.forEach((value) => {
    sleepDataArray.push(value)
  })
  values[2].activityData.forEach((value) => {
    activityDataArray.push(value)
  })
  values[3].hydrationData.forEach((value) => {
    hydrationDataArray.push(value)
  })
}

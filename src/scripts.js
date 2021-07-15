//🏎 Imports🏎
import './css/styles.css';
import {userData} from './data/users'; // won't need b/c its
import UserRepository from './UserRepository';
import {getData, sleepData, activityData, hydrationData} from './apiCalls';

//👂🏽 Event Listeners 👂🏽
window.addEventListener('load', fetchData) // should stay here

//🌍  Global Variables 🌍
let userDataArray = [];
let sleepDataArray = [];
let activityDataArray = [];
let hydrationDataArray = [];



//✨ Functions ✨
function fetchData() {
  Promise.all([getData(), sleepData(), activityData(), hydrationData()]).then((values) =>
    parseValues(values))
};

function parseValues(values) {
  values[0].userData.forEach((value) => {
    // console.log('value', value)
    userDataArray.push(value)
    //this is an array of all users
  })
  values[1].sleepData.forEach((value) => {
    sleepDataArray.push(value)
    //an array of all users sleep data marked by their indiivual ids
  })
  values[2].activityData.forEach((value) => {
    activityDataArray.push(value)
  })
  values[3].hydrationData.forEach((value) => {
    hydrationDataArray.push(value)
  })
}

console.log(userDataArray)
console.log(new UserRepository(userDataArray))
let apiData = new UserRepository(userDataArray)
console.log(apiData.averageStepGoal())
console.log(apiData.getUserbyID(4))
// apiData.getUserbyID(4);


// let apiData = New UserRepository(userData);
// // console.log(apiData)
// //expect: should house all users here
// //actual: parseing error
//
// console.log(apiData)

// console.log(sleepDataArray)
// console.log('hi')

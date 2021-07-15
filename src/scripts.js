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
  values[0].userData.forEach((value, i) => {
    return userDataArray.push(value[i])

/*Hayley's notes: I beleive this is return an empty array with some how the objects
outside of it? Each value console is the right thing, but it for some reason isn't going into
the array? */

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

let apiData = new UserRepository(userDataArray)
// instantiation of UserRepositiory
console.log(apiData.averageStepGoal()) // comes out NAN
console.log(apiData.getUserbyID(4)) // undefined


console.log('sleep array', sleepDataArray) // also does not work


// console.log('hi')

import {userRepo, user, hydration, sleep, startDate} from './scripts';

let greeting = document.getElementById('greeting');
let address = document.getElementById('address');
let email = document.getElementById('email');
let stepGoals = document.getElementById('stepGoals');
let waterStats = document.getElementById('waterStats')
let sleepStats = document.getElementById('sleepStats')
let graph = document.getElementById('graph-details');

const renderGraph = () => {
  graph.innerHTML = `let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2021/13/07', '2021/14/07', '2021/15/07', '2021/16/07', '2021/17/07', '2021/18/07', 'today'],
        datasets: [{
          label: 'Hydration',
          data: [2, 9, 3, 5, 2, 3, 8],
          fill: false,
          borderColor: [
            'rgba(46, 155, 240, 1)',
          ],
          borderWidth: 7
        }, {
          label: 'Sleep',
          data: [2, 1, 3, 6, 2, 3, 6],
          fill: false,
          borderColor: [
            'rgba(84, 93, 186, 1)',
          ],
          borderWidth: 7
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });`
}


const renderUser = () => {
  let greetingHTML = `☀️ Hello, ${user.returnFirstName()}! ☀️`
  greeting.innerHTML = greetingHTML;
}

const showAddress = () => {
  address.innerHTML = `<b>address:</b> ${user.user.address}`;
}

const showEmail = () => {
  email.innerHTML = `<b>email:</b> ${user.user.email}`;
}

const showStepGoals = ()  => {
  stepGoals.innerHTML = `Your Daily Step Goal is ${user.user.dailyStepGoal}. Most people's Step Goal is ${userRepo.averageStepGoal()}`
}

const showWaterConsumed = () => {
  waterStats.innerHTML = `Today, you drank ${hydration.waterByDate("2019/07/30", user.user.id)} liters`
}

const showSleep = () => {
  sleepStats.innerHTML = `Last night, you slept ${sleep.findSleepDay(user.user.id, "2019/07/30")} hours.
  Most nights, you sleep ${sleep.averageHoursOfSleep(user.user.id)} hours with a quality of${sleep.averageQualityOfSleep(user.user.id)} out of 5.`
}

export const renderInfo = () => {
  renderUser();
  showAddress();
  showEmail();
  showStepGoals();
  showWaterConsumed();
  showSleep();
  renderGraph();
};

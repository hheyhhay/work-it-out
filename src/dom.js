import {userRepo, user, hydration, sleep} from './scripts';

let greeting = document.getElementById('greeting');
let address = document.getElementById('address');
let email = document.getElementById('email');
let stepGoals = document.getElementById('stepGoals');
let waterStats = document.getElementById('waterStats')
let sleepStats = document.getElementById('sleepStats')
let myChart = document.getElementById('myChart').getContext('2d');


const renderGraph = () => {
  let displayChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: ['2019/07/24', '2019/07/25', '2019/07/26', '2019/07/27', '2019/07/28', '2019/07/29', 'Today'],
        datasets: [{
          label: 'Hydration',
          data: hydration.weeklyWaterTotal("2019/07/30", user.user.id),
          fill: false,
          borderColor: [
            'rgba(46, 155, 240, 1)',
          ],
          borderWidth: 7
        }, {
          label: 'Sleep',
          data: sleep.findSleepWeek(user.user.id, "2019/07/30"),
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
    });
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

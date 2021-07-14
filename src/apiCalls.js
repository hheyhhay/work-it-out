const UserRepository = require('./UserRepository')


function getData() {
  return fetch("http://localhost:3001/api/v1/users")
    .then((response) => {
      console.log(response, "<>>response");
      return response.json();
    })
    .then((data) => console.log(data));
}

let result = getData();
console.log(result, "<>>>result");

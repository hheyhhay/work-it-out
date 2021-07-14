export let getData = () => {
    return fetch("http://localhost:3001/api/v1/users")
      .then((response) => {
        console.log(response, "<>>response");
        return response.json();
      })
      .then((data) => console.log(data));
  }

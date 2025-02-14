export let userData = () => {
    return fetch("http://localhost:3001/api/v1/users")
      .then((response) => response.json())
      .then((data) => data)
  };

export let sleepData = () => {
    return fetch("http://localhost:3001/api/v1/sleep")
      .then((response) => response.json())
      .then((data) => data);
  };

export let activityData = () => {
    return fetch("http://localhost:3001/api/v1/activity")
      .then((response) => response.json())
      .then((data) => data);
  };

export let hydrationData = () => {
    return fetch("http://localhost:3001/api/v1/hydration")
      .then((response) => response.json())
      .then((data) => data);
  };

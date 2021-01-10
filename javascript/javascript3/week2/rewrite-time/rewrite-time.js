function setTimeoutPromise(delayafter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delayafter / 1000);
    }, delayafter);
  });
}

setTimeoutPromise(3000).then((seconds) => {
  console.log(`Called after ${seconds} seconds`);
});

function getCurrentLocation() {
  return new Promise((resolve, rejects) => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      resolve(`Latitude: ${latitude} °, Longitude: ${longitude} `);
    }

    function error() {
      rejects("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      rejects("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

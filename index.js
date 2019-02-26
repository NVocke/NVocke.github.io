const elRef = document.getElementById('currentLocation');
let watchID;

function locating(position) {
  const { coords, timestamp } = position;
  elRef.innerHTML = `Current Latitued: ${coords.latitude} and current longitude: ${coords.longitude}. Time is ${new Date(timestamp)}`;
}

function locationError() {
  elRef.innerHTML = 'There was an error. Sorry mate.'
}

function setUp() {
  const positionOptions = { enableHighAccuracy: true };

  watchID = navigator.geolocation.watchPosition(locating, locationError, positionOptions);
}

function cancelSubscription() {
  navigator.geolocation.clearWatch(watchID);
  elRef.innerHTML = 'Location-Service was stopped.';
}

document.getElementById('clearWatch').addEventListener('click', cancelSubscription);

setUp();
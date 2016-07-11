// Getting some data

//In it, write a simple node program that will output the latitude and longitude of the International Space Station.
// Practice your google-fu by searching for "iss api" and figuring out the correct URL to use. 
// Hint: there are many options and they are all good :)
// Notice that the values provided by the API are very precise. 
//Round off the values to two decimal digits for a nicer display. Hint: toFixed
// Save/commit/push

var request = require('request');

var url = 'http://api.open-notify.org/iss-now.json';

request(url, function(err, response) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var jsonResponse = response.body;
        var jsonObj = JSON.parse(jsonResponse);
        console.log("ISS Latitude: " + jsonObj.iss_position.latitude.toFixed(2), ", ISS Longitude: " + jsonObj.iss_position.longitude.toFixed(2));
    }
});
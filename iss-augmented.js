var request = require('request');
var prompt = require('prompt');

function getLocationData() {
    prompt.get("City", function (err, result){
        // console.log(result);
        var myAddressUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + result.City;
        //console.log(myAddressUrl); //for debugging
        
        request(myAddressUrl, function(err, addyResponse) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var jsonAddressResponse = addyResponse.body;
                //console.log(jsonAddressResponse); //for debugging
                var addyJsonObj = JSON.parse(jsonAddressResponse);
                var latAddress = Number(addyJsonObj.results[0].geometry.location.lat.toFixed(2));
                var lonAddress = Number(addyJsonObj.results[0].geometry.location.lng.toFixed(2));
                    
                //console.log("My Latitude: " + addyJsonObj.results[0].geometry.location.lat.toFixed(2), ", My Longitude: " + addyJsonObj.results[0].geometry.location.lng.toFixed(2));
                    
                    function getSpaceData() {
                        var spaceUrl = 'http://api.open-notify.org/iss-now.json';
                        request(spaceUrl, function(err, response) {
                            if (err) {
                                console.log('there was an error');
                            }
                            else {
                                var jsonResponse = response.body;
                                var jsonObj = JSON.parse(jsonResponse);
                                 //console.log("ISS Latitude: " + jsonObj.iss_position.latitude.toFixed(2), ", ISS Longitude: " + jsonObj.iss_position.longitude.toFixed(2));
                                var latSpace = Number(jsonObj.iss_position.latitude.toFixed(2));
                                var lonSpace = Number(jsonObj.iss_position.longitude.toFixed(2));
                                    
                         
                                Number.prototype.toRadians = function () {
                                    return this * Math.PI / 180;
                                };
                                

                                    function distanceMath(lat1, lat2, lon1, lon2, enteredCity) {
                                        var R = 6371e3; // metres
                                        var φ1 = lat1.toRadians();
                                        var φ2 = lat2.toRadians();
                                        var Δφ = (lat2-lat1).toRadians();
                                        var Δλ = (lon2-lon1).toRadians();
                                        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                                                Math.cos(φ1) * Math.cos(φ2) *
                                                Math.sin(Δλ/2) * Math.sin(Δλ/2);
                                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                                        var d = R * c;
                                        
                                        console.log(enteredCity + " is " + d.toFixed(2) + " kilometers from the ISS. Yeah, its far.");
                                    }
                                    distanceMath(latAddress, lonAddress, latSpace, lonSpace, result.City);
                            }
                        });
                    }
                    getSpaceData();
            }
        });
    });
}

getLocationData();
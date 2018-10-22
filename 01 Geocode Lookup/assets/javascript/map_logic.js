
// Pull the coordinates out of localStorage so they can be used to center the map
let mapLat = parseFloat(localStorage.getItem("usrLat"));
let mapLng = parseFloat(localStorage.getItem("usrLng"));
let mapAddress = localStorage.getItem("usrAddress");

$("#address-display").text(mapAddress);

// Assign the coordinates to the mapLatLng object in the format that the google API reads
let mapLatLng = { lat: mapLat, lng: mapLng };

var map;

// Define the function initMap(); that will be called by the callback from the maps API script (in  viewMap.html) 

function initMap() {
    // Make a new map in the map div and set its center to the coordinates passed from localStorage
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapLatLng,
        zoom: 15
    });

    // Place a marker on the specified coordinates
    var marker = new google.maps.Marker({
        position: mapLatLng,
        map: map,
        title: mapAddress
    });
};



//googleAPI object holds url and key for the Google geocode API
var googleAPI = {
    url: "https://maps.googleapis.com/maps/api/geocode/json?",
    key: "&key=AIzaSyDPNJxvmbwoFvXhVb9jH3TSGubXK5DKA1U"
};


var map;

var mapLatLng = {
    lat: 43.0801792, 
    lng: -70.8016885 
};

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
        title: "Current Location"
    });
};


//Event handler for the "View Results" button
$("#go-button").on("click", function (event) {
    event.preventDefault();
    // Assign user's inputted address to inputAddress
    let inputAddress = $("#address-input").val();

    // Perform an ajax call to the Google Geocode API
        $.ajax({
            url: googleAPI.url + "address=" + inputAddress + googleAPI.key,
            method: "GET",
        }).then(function (response) {
            console.log(response.results);

            // Populate respective results to the page
            $(".address-display").text(response.results[0].formatted_address);
            $("#lat-display").text(response.results[0].geometry.location.lat);
            $("#lng-display").text(response.results[0].geometry.location.lng);
            $("#global-geo").text(response.results[0].place_id);

            tempLat = response.results[0].geometry.location.lat;
            tempLng = response.results[0].geometry.location.lng;
            window.map.setCenter({lat: tempLat, lng: tempLng });
            marker = new google.maps.Marker({
                position: {lat: tempLat, lng: tempLng },
                map: map,
                title: "Current Location"
            });
            //Enable the View Map button by replacing the empty href with a link to the viewMap page
            // $("#map-redirect").attr("href","viewMap.html");
        });
});



// Define the function initMap(); that will be called by the callback from the maps API script (in  viewMap.html) 


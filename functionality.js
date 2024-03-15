    function calculateRoute() {
        var origin = document.getElementById("originInput").value;
        var destination = document.getElementById("destinationInput").value;

        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();

        var mapOptions = {
            zoom: 12,
            center: {lat: 0, lng: 0} // Coordonate implicite, vor fi actualizate când vor fi obținute rutele
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        directionsRenderer.setMap(map);

        var request = {
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING' // Poți schimba aceasta la 'WALKING' sau 'TRANSIT' dacă este necesar
        };

        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            } else {
                alert('Nu s-a putut calcula traseul: ' + status);
            }
        });
    }


// Funcția pentru a selecta o destinație și a o introduce în input
function selectDestination(destination) {
    document.getElementById("destinationInput").value = destination;
}

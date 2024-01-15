console.log("HELLO THERE")
var map = L.map('map').setView([51.505, -0.09], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
place=prompt("Place")
fetch("https://nominatim.openstreetmap.org/search?format=json&q="+place)
    .then(result => result.json())
    .then(parsedResult => {
        console.log(parsedResult.length);
        console.log(parsedResult)
        console.log(parsedResult[0].display_name)
        if(parsedResult.length>0)
        {
            var marker = L.marker([parsedResult[0].lat, parsedResult[0].lon]).addTo(map);parsedResult[0].lat
            map.setView(new L.LatLng(parsedResult[0].lat, parsedResult[0].lon),14)
        }
        else
            console.log("Not Found")
    });
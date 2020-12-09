var latlng = [-34.7748021,-58.2656945];
var mymap = L.map('mapid').setView(latlng, 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiZG9taW5pbzMiLCJhIjoiY2tmeXRvN21oMGRyejJxcXNuanI2bXYzZCJ9.St1fDtXq5lOOI_xUvyBltA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG9taW5pbzMiLCJhIjoiY2tmeXRmOHZrMGhybzJzcXFjbTlmeGc4MCJ9.WSNNq23ztUqF-8Xtl5MB0w'
}).addTo(mymap);

// dibuja Marcador
var marker = L.marker(latlng).addTo(mymap);
//dibuja radio
 var circle = L.circle(latlng, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(mymap);

/* var popup = L.popup()
    .setLatLng(latlng)
    .setContent('<p>Sede 1<br />Florencio Varela.</p>')
    .openOn(mymap); */

/*
var polygon = L.polygon([
    [-34.7751, -58.267969],
    [-34.7746, -58.267969],
    [-34.7, -58.267969]
]).addTo(mymap);*/
var map = L.map('map').setView([16.5449, 81.5212], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19
}).addTo(map);


// feature group to store drawings
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);


// draw control
var drawControl = new L.Control.Draw({
edit: {
featureGroup: drawnItems
},
draw: {
polygon: true,
rectangle: false,
circle: false,
marker: false,
polyline: false,
circlemarker: false
}
});

map.addControl(drawControl);


// event when farmer draws field
map.on(L.Draw.Event.CREATED, function (event) {

var layer = event.layer;

drawnItems.addLayer(layer);


// get polygon coordinates
var coordinates = layer.getLatLngs();

console.log("Field Coordinates:", coordinates);

});
var map;
var geojsonLayer;


document.addEventListener("DOMContentLoaded", function(event) { 
  var tileUrl = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
  map = L.map('map').setView([52.3808, 4.0000], 8); 
  L.tileLayer(tileUrl).addTo(map);
});

function loadName(place){
  removePlace();
  loadPlace(place);
  makeText(place);
};

function loadPlace(place){
  var url = "https://api.histograph.io/search?name=" + "*"+place + "&type=hg:Place&exact=false";
  d3.json(url, function(err, concepts){
    console.log("Calling api.histograph.io for places with: '" + place + "':");
    console.log(concepts)
    geojsonLayer = L.geoJson(concepts, {
      onEachFeature: onEachFeature
    });
    geojsonLayer.addTo(map);
  }); 
};


function makeText(place){
  var content = d3.text(place+".txt", function(tekst){
    document.getElementById("text").innerHTML = tekst;
  });
};


function removePlace(){
  if(map.hasLayer(geojsonLayer)){
    map.removeLayer(geojsonLayer)
  ;}
};


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
        layer.bindPopup(feature.properties.pits[0].name);
}

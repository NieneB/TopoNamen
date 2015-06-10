var map;
var geojsonLayer;


document.addEventListener("DOMContentLoaded", function(event) { 
  var tileUrl = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
  map = L.map('map').setView([52.3808, 4.0000], 8); 
  L.tileLayer(tileUrl).addTo(map);
});

function loadName(place){

  console.log(place)
  loadPlace(place);
  makeText(place)
};

function loadPlace(place){
  var url = "https://api.histograph.io/search?name=" + "*"+place + "&type=hg:Place";
  
  d3.json(url, function(err, concepts){
    console.log("Calling api.histograph.io for places with: '" + place + "':");
    console.log(concepts.features[0].properties.pits[0].name);
    geojsonLayer = L.geoJson(concepts);
    geojsonLayer.addTo(map).bindPopup();
  }); 
};


function makeText(place){
   //get the text from
  var content = d3.text(place+".txt", function(tekst){
    document.getElementById("text").innerHTML = tekst;
  } );
}
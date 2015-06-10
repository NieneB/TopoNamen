var map;

document.addEventListener("DOMContentLoaded", function(event) { 
  var tileUrl = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
  map = L.map('map').setView([52.2808, 5.4918], 8); 
  L.tileLayer(tileUrl).addTo(map);
});


function loadName(name){
  var concept = loadPlace(name);
  console.log(concept);
};

function loadPlace(place){
  var url = "https://api.histograph.io/search?name=" + "*"+place + "&type=hg:Place";
  d3.json(url, function(err, concepts){
    console.log("Calling api.histograph.io for places with: '" + place + "':");
    L.geoJson(concepts).addTo(map);
    //draw layer on map
    
  }); 
};
  

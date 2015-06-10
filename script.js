var map;

document.addEventListener("DOMContentLoaded", function(event) { 
  var tileUrl = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
  map = L.map('map').setView([52.3808, 5.0918], 8); 
  L.tileLayer(tileUrl).addTo(map);
});


function loadName(name){
  var concept = loadPlace(name);
  var read = new XMLHttpRequest();
          read.open('GET', "info/"+name+'.txt', false);
          read.send();
          var displayName = parseInt(read.responseText)
  document.getElementById("text").textContent= displayName;
  console.log(concept);
};

function loadPlace(place){
  var url = "https://api.histograph.io/search?name=" + "*"+place + "&type=hg:Place";
  d3.json(url, function(err, concepts){
    console.log("Calling api.histograph.io for places with: '" + place + "':");
    console.log(concepts.features[0].properties.pits[0].name)
    L.geoJson(concepts).addTo(map).bindPopup(place).openPopup();
    //draw layer on map
    
  }); 
};
  
// var greenIcon = L.icon({
//     iconUrl: 'leaf-green.png',
//     shadowUrl: 'leaf-shadow.png',
//
//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });


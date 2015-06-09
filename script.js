document.addEventListener("DOMContentLoaded", function(event) { 
  var tileUrl = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png';
  var map = L.map('map').setView([52.2808, 5.4918], 9); 
  L.tileLayer(tileUrl).addTo(map);
});



function makePlace(name){
  console.log(name)
  loadPlace(name)
}

function loadPlace(place){
  var url = "https://api.histograph.io/search?name=" + "*"+place + "&type=hg:Place";
  d3.json(url, function(err, concepts){
    console.log("Calling api.histograph.io for places with: '" + place + "':");
    d3.select("#error").html("");
    
     if (concepts.features.length > 0 ){
       
       console.log(concepts)
       
       var concept = concepts.features.map(function(object){
         return object.geometry.length > 0
       })
       console.log(concept)
       L.geoJson(concepts).addTo(map);
     }  
  }) 
};
 
  


function makePlace(name){
  var place = d3.select("#name")
  console.log(place)
  loadPlace(place)
}

function loadPlace(place){
  var url = "https://api.histograph.io/search?name=" + "*"+place + "&type=hg:Place";
  d3.json(url, function(err, concepts){
    console.log("Calling api.histograph.io for places with: '" + place + "':");
    d3.select("#error").html("");
    
     if (concepts.features.length > 0 ){
       
       console.log(concepts)
       // L.geoJson(json).addTo(map);
     }
    
  }
  
}

  var tileUrl = 'http://otile2.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png';
  var map = L.map('map');
  L.tileLayer(tileUrl).addTo(map);
  map.setView([53.079529, 6.614894], 12);   
  
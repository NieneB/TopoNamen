var map;
var geojsonLayer;
var broek = {
    tekst : "<p>Een broek is een laaggelegen gebied dat nat blijft door opwellend grondwater, kwel, of is een langs een rivier of beek gelegen laag stuk land dat regelmatig overstroomt en s winters vaak langere tijd onder water staat. Een broek kan variëren van een moerassig stuk veengrond tot uitgestrekte uiterwaarden (kleigrond). Veel broeklanden zijn onbruikbaar voor agrarische doeleinden omdat ze te nat zijn. Sommige stukken broekland kunnen worden begraasd in de drogere perioden. Een sterk begroeid stuk broekland wordt broekbos genoemd. Hier kan bosbouw (grienden) plaatsvinden, hoewel nauwelijks machines kunnen worden ingezet omdat die zouden wegzinken in de drassige bodem. Het woord broek is verwant aan het Duitse Bruch (moeras) en het Engelse brook (beek) en is afgeleid van het Germaanse woord broka wat moeras betekent. Het is mogelijk dat dit Germaanse woord verwant is aan het Keltische woord brogilo, dat terugkomt in namen als Brielle en Bruil, en gebruikt wordt voor (vaak bosachtige) moerrassige terreinen. In deze betekenis is het woord broek onzijdig, het is dus het broek. Diverse plaatsen in Nederland en Vlaanderen zijn genoemd naar dit landschap, zie Broek (toponiem). Aan verscheidene toponiemen is het onzijdige woordgeslacht te zien, bijvoorbeeld Het Bossche Broek. Toch komt de variant De Broek wel voor: Het Bossche Broek wordt ook veelvuldig aangeduid als De Bossche Broek en verder is er De Broek, een buurtschap in de gemeente Veldhoven. Achternamen als Van den Broek of Vandenbroucke verwijzen rechtstreeks naar dit landschapstype, of naar het toponiem.</p>"
};


document.addEventListener("DOMContentLoaded", function(event) { 
  var tileUrl = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
  map = L.map('map').setView([52.3808, 4.6000], 8); 
  L.tileLayer(tileUrl).addTo(map);
});

function loadName(place){
  document.getElementById("text").innerHTML = place;
  
  loadPlace(place);
  
};

function loadPlace(place){
  var url = "https://api.histograph.io/search?name=" + "*"+place + "&type=hg:Place";
  
  d3.json(url, function(err, concepts){
    console.log("Calling api.histograph.io for places with: '" + place + "':");
    console.log(concepts.features[0].properties.pits[0].name);
    geojsonLayer = L.geoJson(concepts);
    geojsonLayer.addTo(map).bindPopup(place);
  }); 
};


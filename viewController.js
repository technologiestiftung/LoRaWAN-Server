console.log("Controller initialized");

var fetchApi = function (appId, accessKey) {

//fetch("/api?appId=" + appId + "&accessKey=" + accessKey).then(function(response) {
fetch("/api").then(function(response) {	
	return response.json();
})
.then(function(data) {

	console.dir(data);

	results.innerHTML = "<p>" + data.payload_fields.Temperatur  + "°</p>"
/*
	var newest = data.slices[data.slices.length-1];
	var HTMLString = "<p>Verbrauch am " + data.timeToShow + "</p>";

		HTMLString += "<p>District: " + data.district + "</p><p>Zuführung: " + newest.feed + "</p><p>Erzeugung: " + newest.generation + "</p>";
		HTMLString += "<p>Großkunden: " + newest["key-acount-usage"] + "</p>";
	
		mountDiv.innerHTML = HTMLString;

*/
})
.catch(function(err) { 
	console.log(err)
});
}

fetchApi("ben", "ttn-account-v2.VDfP2rHGJR0HJ4mjCPXU-KtrG5vWHOpIHmIBr0fH2Sg");


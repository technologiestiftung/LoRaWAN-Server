console.log("Controller initialized");



var fetchApi = function (appId, accessKey) {

fetch("/api?appId=" + appId + "&accessKey=" + accessKey).then(function(response) {
	console.log("Fetching with " + appId + " and " + accessKey);
	return response.json();
})
.then(function(data) {

	console.dir(data);

	results.innerHTML = "<p>" + data.payload_fields.Temperatur  + "°</p>"

	var time = new Date(data.metadata.time);
	console.log("Time is: " + time);
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	deviceInfo.innerHTML = "<p>App: " + data.app_id + "</p><p>Device: " + data.dev_id + "</p><p>Letzte Messung: " + hours + ":" + minutes + ":" + seconds + "</p>"
})
.catch(function(err) { 
	console.log(err)
});
}

function getFormData () {
	var appId = document.getElementById("appID").value;
	var key = document.getElementById("key").value;
	
	fetchApi(appId, key);
} 


//fetchApi("ben", "ttn-account-v2.VDfP2rHGJR0HJ4mjCPXU-KtrG5vWHOpIHmIBr0fH2Sg");


//var moment = require('moment');


const api = {
	//open weather api key
	key: "28ec08c2ca82485df5c47e0c877fd186",
	//timezonedb api key
	//key2: "5K3S9KYBRVYB"
}

const zipcode = document.querySelector('.zip');
zipcode.addEventListener('keypress', setQuery);

function setQuery(evt) {
	///....Checks for the "event" of keycode#13 -> 'Enter Key'.......
	if (evt.keyCode == 13) {
		getResults(zipcode.value);
		//getTime(zipcode.value);
		console.log(zipcode.value);
	}
}

function getResults(query) {
	fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${query}&units=imperial&APPID=${api.key}`)
	.then(weather => {
		return weather.json();
	}) .then(displayResults);
}
/*function getTime(query) {
	fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${api.key2}&format=json&by=position&lat=40.689247&lng=-74.044502`)
	.then(time => {
		return time.json();
	}) .then(displayTime);

}

function displayTime (time) {
	let time = document.querySelector('.location .time');
	time.innerText = `${formatted}`;
}*/
function displayResults (weather) {
	console.log(weather);
	//console.log(time);

	//.............displays the City name............................ 
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}`;

	//let time = document.querySelector('.location .time');
	//time.innerText = `${get-time-zone}`;


	//.............displays the Date in the order called in calander function....................... 
	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = calander(now);


	//.............displays the Current Temp............................ 
	let temp = document.querySelector('.location .temp');
	temp.innerText = `${Math.round(weather.main.temp)}°F`;
	//.............displays the Weather type............................ 
	let type = document.querySelector('.location .type');
	type.innerText = weather.weather[0].description;
	console.log(type.innerText);
	//.............displays the high & low temps........................... 
	let highs = document.querySelector('.location .highs');
	highs.innerText = `Highs around: ${Math.round(weather.main.temp_max)}°F // Lows around: ${Math.round(weather.main.temp_min)}°F`;



}
//..........Builds the current date for display...........
function calander (d) {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let day = days[d.getDay()];
	let month = months[d.getMonth()];
	let date = d.getDate();
	let year = d.getFullYear();

	return `${day} ${month} ${date} ${year}`;
}
/*function getTime (){
var time = new Moment();
	console.log(time.format('h:mm:ss a'));
	return time;
}*/
//console.log(getTime());
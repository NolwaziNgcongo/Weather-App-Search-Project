function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city")
 
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature); 
}



function searchCity(city) {
    let apiKey = "29e62dfta89cbob94c060449f93ce036";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);
}


let seaarchFormElement = document.querySelector("#search-form");
seaarchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Paris")
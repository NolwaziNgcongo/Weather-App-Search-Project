function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input")
    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = searchInput.value;
}


let seaarchFormElement = document.querySelector("#search-form")
seaarchFormElement.addEventListener("submit", handleSearchSubmit)
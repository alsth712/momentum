const API_KEY = "13243bf5ac26952434ce241e58d81ee4";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].main} ( ${data.weather[0].description} ) / ${data.main.temp}°C`;
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      const Icon = document.querySelector("#weather-icon");
      const weatherIcon = data.weather[0].icon;
      iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      Icon.src = iconUrl;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you. 😥🌈 ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
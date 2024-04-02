const apiKey = "fe26ca927d2467f53cf07c7ebccba56d ";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 484){
        document.querySelector(".error").computedStyleMap.display = "block";
        document.querySelector(".weather").computedStyleMap.display = "none";
    }else{
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
         }else if(data.weather[0].main == "Clear"){
             weatherIcon.src = "images/clear.png";
         }else if(data.weather[0].main == "Rain"){
             weatherIcon.src = "images/Rain.png";
         }else if(data.weather[0].main == "Drizzle"){
             weatherIcon.src = "images/drizzle.png";
         }else if(data.weather[0].main == "Mist"){
             weatherIcon.src = "images/mist.png";
         }
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    

    document.querySelector(".weather").computedStyleMap.display = "block";
    document.querySelector(".error").computedStyleMap.display = "none"; 
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})




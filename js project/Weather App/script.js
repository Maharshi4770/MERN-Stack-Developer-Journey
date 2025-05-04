const apikey = "8fb00a232ca248d72a82085e0d380ed2"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apikey + "&q="
const sbox = document.querySelector(".search input")
const sbtn = document.querySelector(".search button")
const wi = document.querySelector(".W-icon")

async function checkweather(city) {
    const response = await fetch(apiurl + city)
    var data = await response.json()
    console.log(data)

    document.querySelector(".City").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main == "Clouds"){
        wi.src = "assets/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        wi.src = "assets/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        wi.src = "assets/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        wi.src = "assets/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        wi.src = "assets/mist.png"
    }
    
}

sbtn.addEventListener("click",()=>{
    checkweather(sbox.value)
})

// Optionally you can pass a default city to checkweather() here:
// checkweather("New York")
    
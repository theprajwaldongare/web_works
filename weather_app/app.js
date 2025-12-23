// import city from "./script.js"

let data;
let dataloaded = false;
let loading = document.getElementById("loading")

let params = new URLSearchParams(window.location.search)
let city = params.get("city")
console.log(city)

let body = document.getElementById("body")
let search = document.getElementById("srch")
let weather = document.getElementById("weatherdetail")
let temperature = document.getElementById("tmp")
let conv = document.getElementById("imgconv")
let humidity = document.getElementById("humidityvalue")
let cloudover = document.getElementById("cloudovervalue")
let wind = document.getElementById("windvalue")
let pressure = document.getElementById("pressurevalue")
let visiblity = document.getElementById("visiblityvalue")
let uvindex = document.getElementById("uvindexvalue")
let region = document.getElementById("map")
let country = document.getElementById("countryval")

let weatherval
let ctemp
let ftemp
let humidityval
let cloudoverval
let windval
let pressureval
let visiblityval
let uvindexval
let regionval
let stateval
let countryval

search.addEventListener("click", () => {
    console.log(inp.value)
    city = inp.value
    // window.location.href = `app.html?city=${city}`
    window.location.href = `https://theprajwaldongare.github.io/web_works/weather_app/app.html?city=${city}`
})

async function dataloader() {
    loading.style.display = "flex"

    await fetch(`https://wttr.in/${city}?format=j1`).then(a => {
        return a.json()
    }).then(d => {
        console.log(d)
        data = d
    })

    loading.style.display = "none"


    ctemp = data.current_condition[0].temp_C
    ftemp = data.current_condition[0].temp_F
    humidityval = data.current_condition[0].humidity
    cloudoverval = data.current_condition[0].cloudcover
    windval = data.current_condition[0].windspeedKmph
    pressureval = data.current_condition[0].pressure
    visiblityval = data.current_condition[0].visibility
    uvindexval = data.current_condition[0].uvIndex
    regionval = data.nearest_area[0].areaName[0].value
    stateval = data.nearest_area[0].region[0].value
    countryval = data.nearest_area[0].country[0].value
    weatherval = data.current_condition[0].weatherDesc[0].value

    weather.textContent = `${weatherval}`
    temperature.textContent = `${ctemp} ℃`
    humidity.textContent = `${humidityval} %`
    cloudover.textContent = `${cloudoverval} %`
    wind.textContent = `${windval} km/h`
    pressure.textContent = `${pressureval} hPa`
    visiblity.textContent = `${visiblityval} km`
    uvindex.textContent = `${uvindexval} index`
    region.textContent = `${regionval}, ${stateval}`
    country.textContent = `${countryval}`

    const weatherstate = String(weatherval).toLowerCase();

    if (weatherstate.includes("sunny") || weatherstate.includes("clear") || weatherstate.includes("fair")
    ) {
        body.style.backgroundImage = 'url("Icons/sunny_bg.jpg")';
    }
    else if (weatherstate.includes("rain") || weatherstate.includes("drizzle") || weatherstate.includes("shower") || weatherstate.includes("storm") || weatherstate.includes("thunder")
    ) {
        body.style.backgroundImage = 'url("Icons/rainy_bg.jpg")';
    }
    else if (weatherstate.includes("fog") || weatherstate.includes("haze") || weatherstate.includes("mist") || weatherstate.includes("smog") || weatherstate.includes("dust") || weatherstate.includes("smoke")
    ) {
        body.style.backgroundImage = 'url("Icons/smoke_bg.jpg")';
    }
    else if (weatherstate.includes("snow") || weatherstate.includes("sleet") || weatherstate.includes("blizzard") || weatherstate.includes("hail")
    ) {
        body.style.backgroundImage = 'url("Icons/snow_bg.jpg")';
    }
    else {
        body.style.backgroundImage = 'url("Icons/cloudy_bg.jpg")';
    }


}
dataloader()



let unit = "c"
conv.addEventListener("click", () => {
    if (unit == "c") {
        unit = "f"
        temperature.textContent = ftemp + "℉"
    }
    else if (unit == "f") {
        unit = "c"
        temperature.textContent = ctemp + "℃"
    }
})


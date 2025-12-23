let search = document.getElementById("srch")
let inp = document.getElementById("inp")
let city;
let data;

let dataloaded = false;
search.addEventListener("click",()=>{
    console.log(inp.value)
    city = inp.value
    // window.location.href = `app.html?city=${city}`
    window.location.href = `https://theprajwaldongare.github.io/web_works/weather_app/app.html?city=${city}`
})


// let city = "Amravati";
// export default city;





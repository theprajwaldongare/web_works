let dsp = document.getElementById("dsp")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let sec = 0
let min = 0
let hr = 0
let milisec = 0
let runn=false

function defaulthere() {

dsp.innerHTML=`${hr}<span style="color:tomato;font-size:20px;" >Hrs</span> :
  ${min}<span style="color:tomato;font-size:20px;" >Min</span> :
  ${sec}<span style="color:tomato;font-size:20px;" >Sec</span>
  `
}
defaulthere()

start.addEventListener("click",()=>{
  runn=true
})
stop.addEventListener("click",()=>{
  runn=false
})
reset.addEventListener("click",()=>{
  runn=false
  milisec=0
  sec=0
  min=0
  hr=0
  defaulthere()
})


setInterval(()=>{
  if (runn===true) {
    
  
  if (milisec==1000) {
    sec=sec+1
    milisec=0
  }
  if (sec==60) {
    min=min+1
    sec=0
  }
  if (min==60) {
    hr=hr+1
    min=0
  }
  
  milisec=milisec+100
  dsp.innerHTML=`${hr}<span style="color:tomato;font-size:20px;" >Hrs</span> :
  ${min}<span style="color:tomato;font-size:20px;" >Min</span> :
  ${sec}<span style="color:tomato;font-size:20px;" >Sec</span>
  `
  //console.log(hr,min,sec)
  }
},100)

let theme = document.getElementById("theme")
let tcont = document.getElementById("tcont")
let appname = document.getElementById("appname")
let thme = "white"
theme.addEventListener("click",()=>{
  if (thme == "white") {
    thme="black"
    document.body.style.background="black"
    tcont.innerText="🌕"
    appname.style.color="white"

  }
  else if (thme == "black") {
    thme="white"
    document.body.style.background="white"
    tcont.innerText="🌑"
    appname.style.color="black"

  }
})
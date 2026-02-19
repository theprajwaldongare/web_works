let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")
let c5 = document.getElementById("c5")
let c6 = document.getElementById("c6")
let c7 = document.getElementById("c7")
let c8 = document.getElementById("c8")
let c9 = document.getElementById("c9")
let c10 = document.getElementById("c10")
let c11 = document.getElementById("c11")
let c12 = document.getElementById("c12")
let c13 = document.getElementById("c13")
let c14 = document.getElementById("c14")
let c15 = document.getElementById("c15")
let c16 = document.getElementById("c16")

let weDontKnow =
  [[null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null]]

let selectMe = ["animals", "flowers", "garden", "ocean", "pirates", "space"]
let animals = ["bear", "cat", "dog", "elephant", "giraffe", "hippo", "monkey", "panda"]
let flowers = ["blueleaf", "orangeflower", "pinkflowers", "pinklotus", "skyblueflower", "sunflower", "yellowflower", "yellowpinkflower"]
let garden = ["bird", "blueleaf", "honeybee", "ladybird", "mug", "pinkflower", "snail", "sunflower"]
let ocean = ["fish1", "fish2", "jellyfish", "leaf", "octopus", "shell", "starfish", "turtle"]
let pirates = ["boom", "face", "flag", "hat", "loot", "map", "ship", "skull"]
let space = ["sun", "earth", "mars", "metor", "rocket", "spaceship1", "spaceship2", "spaceship3"]

let selected = selectMe[Math.floor(Math.random() * 6)]
console.log(selected)
let names = null
if (selected == "animals") {
  names = animals
}
else if (selected == "flowers") {
  names = flowers
}
else if (selected == "garden") {
  names = garden
}
else if (selected == "ocean") {
  names = ocean
}
else if (selected == "pirates") {
  names = pirates
}
else if (selected == "space") {
  names = space
}

let taken = []
for (let i = 0; i < 16; i++) {
  weMakeYouUnique()
}
function weMakeYouUnique() {

  let unique = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
  if (taken.includes(unique)) {
    weMakeYouUnique()
  }
  else {
    taken.push(unique)
    console.log(unique)
  }
}

let trn = 0 // 0 or 1 for repetation
let nm = 0 // to loop in names
let x = 0 // x of weDontKnow
let y = 0 // y of weDontKnow
// let tnm=0 // term i out of 15 in taken ... no need of it as its work is done by i 
for (let i = 0; i < 16; i++) {
  /*if(x>3 || y>3){
    // for resetting 
    if (x>3) {
      x=0
    }
    if (y>3) {
      y=0
    }
  }*/
  x = Math.floor((taken[i] - 1) / 4)
  y = (taken[i] - 1) % 4
  if (trn == 0) {
    // 1d to 2d x,y and noo need to reset x,y as 
    //taken[i]

    weDontKnow[x][y] = names[nm]
    trn = trn + 1
  }
  else if (trn == 1) {
    weDontKnow[x][y] = names[nm]
    trn = 0
    nm = nm + 1
  }
}
console.log(weDontKnow)

x = 0
y = 0
for (let i = 1; i <= 16; i++) {
  x = Math.floor((i - 1) / 4)
  y = (i - 1) % 4
  let txtt = weDontKnow[x][y]
  document.getElementById("c" + (i)).innerHTML = `<img src="Images/${selected}/${txtt}.jpg" alt="" />`

}
setTimeout(() => {
  for (let i = 1; i <= 16; i++) {
    x = Math.floor((i - 1) / 4)
    y = (i - 1) % 4
    let txtt = weDontKnow[x][y]
    document.getElementById("c" + (i)).innerHTML = ""
  }

}, 2000)


let crd = 0
let cname = "" // as when crd is 0 assign the name and when crd is 1 verify the name .. is both same??
let firstCard = null
let secondCard = null
let lock = false
for (let i = 1; i <= 16; i++) {
  document.getElementById("c" + i).addEventListener("click", () => {

    let currentCard = document.getElementById("c" + i);
    if (currentCard === firstCard) {
      return;
    }
    x = Math.floor((i - 1) / 4)
    y = (i - 1) % 4
    if (crd == 0 && !lock) {
      let txtt = weDontKnow[x][y]
      // firstCard=document.getElementById("c"+(i))
      firstCard = currentCard
      firstCard.innerHTML = `<img src="Images/${selected}/${txtt}.jpg" alt="" />`

      cname = weDontKnow[x][y]
      crd++
    }
    else if (crd == 1 && !lock) {
      let txtt = weDontKnow[x][y]
      // secondCard=document.getElementById("c"+(i))
      secondCard = currentCard
      secondCard.innerHTML = `<img src="Images/${selected}/${txtt}.jpg" alt="" />`

      if (cname == weDontKnow[x][y]) {

        console.log("We are good")
        firstCard = null
      }
      else {
        lock = true
        setTimeout(() => {
          firstCard.innerHTML = ""
          secondCard.innerHTML = ""
          firstCard = null
          lock = false
        }, 1600)

      }
      crd = 0
      cname = ""

    }

  })
}

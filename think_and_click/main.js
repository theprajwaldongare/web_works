let col = ["red", "green", "blue", "yellow", "pink", "grey", "orange", "purple", "brown"]
let click = 0
function color_gen() {
    let p
    let track = []


    while (track.length < 9) {
        p = Math.floor(Math.random() * (9 - 0) + 0)
        // console.log(p)
        let cnt = 0
        if (track.length == 0) {
            track.push(p)
            // s = s + col[p] + "-"
        }
        else {
            for (let j = 0; j < track.length; j++) {
                if (track[j] != p) {
                    cnt = cnt + 1
                }

            }
            if (cnt == track.length) {
                track.push(p)
                // s = s + col[p] + "-"

            }
        }
    }


    return track

}

function text_gen(track) {
    // track maintains the base case of color not same as text
    let tr = []
    j = 0
    while (tr.length < 9) {
        p = Math.floor(Math.random() * (9 - 0) + 0)
        // console.log(p)
        while (p == track[j]) {
            p = Math.floor(Math.random() * (9 - 0) + 0)
        }
        tr.push(p)
        // s = s + col[p] + "-"
        j++
    }
    // s = s.slice(0, s.length - 1);
    // console.log(s)
    // console.log(tr)
    return tr
}
// console.log(text_gen())
// console.log(color_gen())

let cg = color_gen()
let tg = text_gen(cg)

// console.log("Text", tg)
// console.log("color", cg)

let s = ""
for (let i = 0; i < 9; i++) {
    s += `<span style="color:${col[cg[i]]};font-size: 18px;">${col[tg[i]]}</span>`;
    if (i !== 9) s += "&nbsp;&nbsp;"; // add space
}

let play = document.getElementById("play")

play.addEventListener("click", function () {
    // console.log("Clicked_here")
    play.style.display = "none"

    let text = document.getElementById("com")
    text.innerHTML = s
    click = 1
    // s
    // text.innerHTML = s
    // text.style.color = "white"
    // text.style.fontSize = "16px"

})

let timeleft = 20
let timedisp = document.getElementById("timer")

play.addEventListener("click", function () {
    let count = setInterval(function () {
        timedisp.innerHTML = timeleft
        // console.log(timeleft)
        if (timeleft < 0 || idowork == 9 || idowork == -1) {
            clearInterval(count)
            if (idowork == 9 || idowork == -1) {
                // timedisp.innerHTML=`` instead of a blank we stop the timer and show that time only ... so that user knows how time was left even the game is ended 
                if (idowork == 9) {
                    //                     timedisp.innerHTML += `<style>.playagain{
                    //     display: flex;
                    //     align-items: center;
                    //     justify-content: center;
                    //     width: 80px;
                    //     height: 50px;
                    //     background-color: aqua;

                    // }</style><div class="playagain" id="playagain"><div class="plyang" id="plyagn">PLAY AGAIN</div></div>`
                    document.getElementById("playagain").style.display = "flex"
                    // document.getElementById("playagain").style.display = "flex"
                    document.getElementById("playagain").addEventListener("click", function () {
                        window.location.href = "https://theprajwaldongare.github.io/web_works/think_and_click"
                        // console.log("reset the game")
                    })
                    document.getElementById("main").innerHTML = `<style>
                    img{width:100%;height:100%;object-fit:cover;border-radius:20px;}
                    </style>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLrZQbtPFSWkikiZ4QQPEXpIxHTX9iRSLZM0Ajx0ddw&s=10" alt="win_image">
                    `
                }
                else if (idowork == -1) {
                    idowork = -2
                    document.getElementById("playagain").style.display = "flex"
                    // document.getElementById("playagain").style.display = "flex"
                    document.getElementById("playagain").addEventListener("click", function () {
                        window.location.href = "https://theprajwaldongare.github.io/web_works/think_and_click"
                        // console.log("reset the game")
                    })
                }
            }
            // check whats the worong here

            else {
                timedisp.innerHTML = `<h5>TIME UP !</h5>`


                idowork = -2
                document.getElementById("playagain").style.display = "flex"
                // document.getElementById("playagain").style.display = "flex"
                document.getElementById("playagain").addEventListener("click", function () {
                    window.location.href = "https://theprajwaldongare.github.io/web_works/think_and_click"
                    // console.log("reset the game")
                })
            }
        }
        timeleft--

    }, 1000)
})

let colorclick = []

// this idowork variable to check does user click all tiles in correct order 
let idowork = 0

play.addEventListener("click", function () {
    let c11 = document.getElementById("c11")
    let c12 = document.getElementById("c12")
    let c13 = document.getElementById("c13")

    let c21 = document.getElementById("c21")
    let c22 = document.getElementById("c22")
    let c23 = document.getElementById("c23")

    let c31 = document.getElementById("c31")
    let c32 = document.getElementById("c32")
    let c33 = document.getElementById("c33")


    while (colorclick.length < 9) {
        p = Math.floor(Math.random() * (9 - 0) + 0)
        // console.log(p)
        let cnt = 0
        if (colorclick.length == 0) {
            colorclick.push(p)

        }
        else {
            for (let j = 0; j < colorclick.length; j++) {
                if (colorclick[j] != p) {
                    cnt = cnt + 1
                }

            }
            if (cnt == colorclick.length) {
                colorclick.push(p)


            }
        }
    }
    // console.log(colorclick)
    c11.style.backgroundColor = col[colorclick[0]]
    c12.style.backgroundColor = col[colorclick[1]]
    c13.style.backgroundColor = col[colorclick[2]]

    c21.style.backgroundColor = col[colorclick[3]]
    c22.style.backgroundColor = col[colorclick[4]]
    c23.style.backgroundColor = col[colorclick[5]]

    c31.style.backgroundColor = col[colorclick[6]]
    c32.style.backgroundColor = col[colorclick[7]]
    c33.style.backgroundColor = col[colorclick[8]]
    
    let dc11, dc12, dc13, dc21, dc22, dc23, dc31, dc32, dc33
    dc11 = dc12 = dc13 = dc21 = dc22 = dc23 = dc31 = dc32 = dc33 = 0

    c11.addEventListener("click", function () {

        if (idowork != -2 && dc11 == 0) {


            let cv11 = colorclick[0]
            if (cv11 == cg[idowork]) {
                c11.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc11 = 1
            }
            else {
                c11.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c12.addEventListener("click", function () {

        if (idowork != -2 && dc12 == 0) {


            let cv12 = colorclick[1]
            if (cv12 == cg[idowork]) {
                c12.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc12 = 1
            }
            else {
                c12.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c13.addEventListener("click", function () {

        if (idowork != -2 && dc13 == 0) {
            let cv13 = colorclick[2]
            if (cv13 == cg[idowork]) {
                c13.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc13 = 1
            }
            else {
                c13.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c21.addEventListener("click", function () {

        if (idowork != -2 && dc21 == 0) {
            let cv21 = colorclick[3]
            if (cv21 == cg[idowork]) {
                c21.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc21 = 1
            }
            else {
                c21.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c22.addEventListener("click", function () {

        if (idowork != -2 && dc22 == 0) {
            let cv22 = colorclick[4]
            if (cv22 == cg[idowork]) {
                c22.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc22 = 1
            }
            else {
                c22.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c23.addEventListener("click", function () {

        if (idowork != -2 && dc23 == 0) {
            let cv23 = colorclick[5]
            if (cv23 == cg[idowork]) {
                c23.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc23 = 1
            }
            else {
                c23.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c31.addEventListener("click", function () {

        if (idowork != -2 && dc31 == 0) {
            let cv31 = colorclick[6]
            if (cv31 == cg[idowork]) {
                c31.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc31 = 1
            }
            else {
                c31.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c32.addEventListener("click", function () {

        if (idowork != -2 && dc32 == 0) {
            let cv32 = colorclick[7]
            if (cv32 == cg[idowork]) {
                c32.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc32 = 1
            }
            else {
                c32.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })

    c33.addEventListener("click", function () {

        if (idowork != -2 && dc33 == 0) {
            let cv33 = colorclick[8]
            if (cv33 == cg[idowork]) {
                c33.style.backgroundColor = "rgb(203, 203, 206)";
                idowork++
                dc33 = 1
            }
            else {
                c33.style.backgroundColor = "rgba(0, 0, 0, 1)";
                idowork = -1
            }
        }

    })
})

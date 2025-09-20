let o = 0;
let x = 1;
let curr = 0;
let checkflag = 0;
let writeflag = 0;
function check() {
  if (checkflag === 0) {
    // for rows
    if (l[0][0] === 0 && l[0][1] === 0 && l[0][2] === 0) {
      console.log("First row zero")

      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;"> O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[0][0] === 1 && l[0][1] === 1 && l[0][2] === 1) {
      console.log("First row one")

      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #89691fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;
    }

    else if (l[1][0] === 0 && l[1][1] === 0 && l[1][2] === 0) {
      console.log("Second row zero")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;">O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[1][0] === 1 && l[1][1] === 1 && l[1][2] === 1) {
      console.log("Second row one")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #89691fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;
    }

    else if (l[2][0] === 0 && l[2][1] === 0 && l[2][2] === 0) {
      console.log("Third row zero")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;">O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[2][0] === 1 && l[2][1] === 1 && l[2][2] === 1) {
      console.log("Third row one")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #6c551fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;
    }

    // for columns

    else if (l[0][0] === 0 && l[1][0] === 0 && l[2][0] === 0) {
      console.log("First column zero")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;">O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[0][0] === 1 && l[1][0] === 1 && l[2][0] === 1) {
      console.log("First column one")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #89691fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;
    }

    else if (l[0][1] === 0 && l[1][1] === 0 && l[2][1] === 0) {
      console.log("Second column zero")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;">O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[0][1] === 1 && l[1][1] === 1 && l[2][1] === 1) {
      console.log("Second column one")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #89691fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }

    else if (l[0][2] === 0 && l[1][2] === 0 && l[2][2] === 0) {
      console.log("Third column zero")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;">O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[0][2] === 1 && l[1][2] === 1 && l[2][2] === 1) {
      console.log("Third column one")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #89691fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }

    // for diagonals

    else if (l[0][0] === 0 && l[1][1] === 0 && l[2][2] === 0) {
      console.log("\ diagonal  zero")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;">O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[0][0] === 1 && l[1][1] === 1 && l[2][2] === 1) {
      console.log("\ diagonal one")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #89691fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }


    else if (l[0][2] === 0 && l[1][1] === 0 && l[2][0] === 0) {
      console.log("/ diagonal  zero")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #19225fff;font-family:Carter One;border-radius:50%;border: 7px dotted blue;padding:30px;">O WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;

    }
    else if (l[0][2] === 1 && l[1][1] === 1 && l[2][0] === 1) {
      console.log("/ diagonal one")
      let dv = document.createElement('div');
      dv.innerHTML = '<div style="color: #89691fff;font-family:Carter One;border-radius:50%;border: 7px dotted orange;padding:30px;">X WIN !</div>'
      document.getElementById("wn").appendChild(dv)
      checkflag = 1;
      writeflag = 1;
    }
  }
}

let l = [[null, null, null], [null, null, null], [null, null, null]];

function addox(n) {
  let i = Number(n[0]) - 1;
  let j = Number(n[1]) - 1;

  if (l[i][j] == null) {
    if (writeflag === 0) {
      let dv = document.createElement('div');
      if (curr == 0) {
        dv.innerHTML = '<div style="width:100%; height:100%; display:flex; justify-content: center;align-items: center;"><h1 style="color:#273583;font-size:70px;"> O </h1></div>';
        l[i][j] = curr;
        curr = 1;
        check();

      }
      else {
        dv.innerHTML = '<div style="width:100%; height:100%; display:flex; justify-content: center;align-items: center;"><h1 style="color:#b16727;font-size:70px;"> X </h1></div>';
        l[i][j] = curr;
        curr = 0;
        check();
      }
      document.getElementById(n).appendChild(dv);
      console.log(l)

    }
  }
}

document.getElementById("11").addEventListener("click", function () { addox("11") });
document.getElementById("12").addEventListener("click", function () { addox("12") });
document.getElementById("13").addEventListener("click", function () { addox("13") });
document.getElementById("21").addEventListener("click", function () { addox("21") });
document.getElementById("22").addEventListener("click", function () { addox("22") });
document.getElementById("23").addEventListener("click", function () { addox("23") });
document.getElementById("31").addEventListener("click", function () { addox("31") });
document.getElementById("32").addEventListener("click", function () { addox("32") });
document.getElementById("33").addEventListener("click", function () { addox("33") });

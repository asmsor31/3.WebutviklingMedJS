console.log("Well, there is a potato here.");

potet = 0;


function mer_potet() {
    potet += 1
    console.log("Du grodde 1 potet.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
  number_check()
  number_minus_check()
}

function mye_mer_potet() {
    potet += 10
    console.log("Du grodde 10 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
  number_check()
  number_minus_check()
}

function mye_mye_mer_potet() {
    potet += 100
    console.log("Du grodde 100 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
  number_check()
  number_minus_check()
}



function mindre_potet() {
    potet -= 1
    console.log("Du spiste 1 potet.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
  number_check()
  number_minus_check()
}

function mye_mindre_potet() {
    potet -= 10
    console.log("Du spiste 10 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
  number_check()
  number_minus_check()
}

function mye_mye_mindre_potet() {
    potet -= 100
    console.log("Du spiste 100 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
  number_check()
  number_minus_check()
}



function number_check() {
  if (potet == 2469) {
    window.alert("Potet :3")
    }
  }

function number_minus_check() {
if (potet == -2469) {
  window.alert("Potet :c")
  }
}
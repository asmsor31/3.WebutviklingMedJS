console.log("Well, there is a potato here.");

potet = 0;
up_potet = 1
up_stage = 's1'


function potet1() {
    potet += up_potet
    console.log("Du grodde 1 potet.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}

function up() {
    if (up_stage == 's1') {
      if (potet > 50) {
      potet -= 50
      up_potet += 1
      up_stage = 's2'
      window.alert("Du gror nå 2 poteter om gangen istedet for 1!")
      document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
      document.getElementById("gro_poteter").innerHTML = 'Gro 2 poteter'
      document.getElementById("up_poteter").innerHTML = 'Oppgradering (Koster 200 poteter)'}
      else if (potet < 50) {
      window.alert("Du har ikke 50 poteter!")}
  } else if (up_stage == 's2') {
      if (potet > 200) {
      potet -= 200
      up_potet += 2
      up_stage = 's3'
      window.alert("Du gror nå 4 poteter om gangen istedet for 2!")
      document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
      document.getElementById("gro_poteter").innerHTML = 'Gro 4 poteter'
      document.getElementById("up_poteter").innerHTML = 'Oppgradering (Koster 500 poteter)';}
      else if (potet < 200) {
      window.alert("Du har ikke 200 poteter!")}
  } else if (up_stage == 's3') {
      if (potet > 500) {
      potet -= 500
      up_potet += 4
      up_stage = 's4'
      window.alert("Du gror nå 8 poteter om gangen istedet for 4!")
      document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
      document.getElementById("gro_poteter").innerHTML = 'Gro 8 poteter'
      document.getElementById("up_poteter").innerHTML = 'Oppgradering (Koster 1000 poteter)';}
      else if (potet < 500) {
      window.alert("Du har ikke 500 poteter!")}
  } else if (up_stage =='s4') {
      if (potet > 1000) {
      potet -= 1000
      up_potet += 8
      up_stage = 's5'
      window.alert("Du gror nå 16 poteter om gangen istedet for 8!")
      document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
      document.getElementById("gro_poteter").innerHTML = 'Gro 16 poteter'
      document.getElementById("up_poteter").innerHTML = 'Oppgradering (Koster 2000 poteter)';}
      else if (potet < 1000) {
      window.alert("Du har ikke 1000 poteter!")}
  } else if (up_stage == 's5') {
      if (potet > 2000) {
      potet -= 2000
      up_potet += 16
      up_stage = 's6'
      window.alert("Du gror nå 32 poteter om gangen istedet for 16!")
      document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
      document.getElementById("gro_poteter").innerHTML = 'Gro 32 poteter'
      document.getElementById("up_poteter").innerHTML = 'Oppgradering (Koster 5000 poteter)';}
      else if (potet < 2000) {
      window.alert("Du har ikke 2000 poteter!")}
  } else if (up_stage == 's6') {
      if (potet > 5000) {
      potet -= 5000
      up_potet += 32
      up_stage = 's7'
      window.alert("Du gror nå 64 poteter om gangen istedet for 32!")
      document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
      document.getElementById("gro_poteter").innerHTML = 'Gro 64 poteter'
      document.getElementById("up_poteter").innerHTML = 'Oppgradering (Koster 10000 poteter)';}
      else if (potet < 5000) {
      window.alert("Du har ikke 5000 poteter!")}
  } else if (up_stage == 's7') {
      if (potet > 10000) {
      potet -= 10000
      up_potet += 64
      up_stage = 'sMAX'
      window.alert("Du gror nå 128 poteter om gangen istedet for 64!")
      document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
      document.getElementById("gro_poteter").innerHTML = 'Gro 128 poteter'
      document.getElementById("up_poteter").innerHTML = 'Oppgradering (MAX)';}
      else if (potet < 10000) {
      window.alert("Du har ikke 10000 poteter!")}
  }
}
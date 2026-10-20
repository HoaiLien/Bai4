 function changeLight(color) {
     document.getElementById("red").classList.remove("active");
     document.getElementById("yellow").classList.remove("active");
     document.getElementById("green").classList.remove("active");
     document.getElementById(color).classList.add("active");
 }
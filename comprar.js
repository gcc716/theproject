let door = document.querySelector(".viagens"); 
let butto = document.getElementById("compra");
let buttons = document.getElementById("voar");


butto.onclick = function () {
  door.style.display = "block";
};
buttons.onclick = function () {
  door.style.display = "none";
};
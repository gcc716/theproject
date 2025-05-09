let modal = document.querySelector(".fundo"); 
let modal1 = document.querySelector(".button1");
let modal2 = document.querySelector(".sna ");
let modais = document.querySelector(".viagem"); 
let modai = document.querySelector(".close"); 
let moda = document.querySelector(".fechar"); 
let botao = document.querySelector(".button"); 
let fundo = document.querySelector(".fundao"); 
let door = document.querySelector(".porta"); 



modal1.onclick = function () {
  modal.style.display = "block";
};
modal2.onclick = function () {
  modais.style.display = "block";
};
modai.onclick = function () {
  modais.style.display = "none";
};
moda.onclick = function () {
  modal.style.display = "none";
};
botao.onclick = function () {
  fundo.style.display = "block";
};
door.onclick = function () {
  fundo.style.display = "none";
};
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const cityName = card.querySelector(".local p").textContent.toLowerCase();
      const match = cityName.includes(query);
      card.style.display = match ? "block" : "none";
    });
  });
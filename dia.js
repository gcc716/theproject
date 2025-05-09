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
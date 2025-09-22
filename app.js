
function showFlowers() {
  const flowersDiv = document.getElementById("flowers");
  flowersDiv.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.textContent = "🌼";
    flowersDiv.appendChild(flower);
  }
}

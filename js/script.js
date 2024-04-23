//---Dark Mode Toggle
const container = document.querySelector(":root");
const darkMode = document.getElementById("dark-mode-toggle");
let isMoved = false;

darkMode.addEventListener("click", () => {
  container.classList.toggle("dark-mode");

  if (!isMoved) {
    darkMode.style.left = "2.7vw";
    darkMode.style.backgroundImage = "url('image/icons-sun.png')";
  } else {
    darkMode.style.left = "7.3vw";
    darkMode.style.backgroundImage = "url('image/icons-moon.png')";
  }
  isMoved = !isMoved;
});

//---Clone input tables
let i = 0;
const tables = document.getElementById("duplicater");

function duplicate() {
  const clone = tables.cloneNode(true);
  clone.id = "duplicater" + ++i;
  tables.parentNode.insertBefore(clone, puls);
}
//--Move Button
const puls = document.getElementById("plus");
let isClick = false;

puls.addEventListener("click", () => {
  if (!isClick) {
    tables.style = "display: block";
    puls.style = "transform: translate(-31vw, -26vh) scale(0.2)";
    
    isClick = true;
  }
});

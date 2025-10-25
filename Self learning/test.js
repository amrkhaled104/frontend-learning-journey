let btn = document.querySelector(".btn");
let board = document.querySelector(".board");

window.addEventListener("scroll", () => {
  if (scrollY >= 600) {
    btn.style.display = "block";
    btn.style.position = "fixed";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

function updateBackground() {
  board.style.backgroundColor = window.localStorage['color'] || 'white';
}

updateBackground();
document.addEventListener("click", (e) => {
  let classes = [...e.target.classList];
  const colors = ["red", "blue", "black", "green"];
  
  for (let color of colors) {
    if (classes.includes(color)) {
      localStorage.setItem("color", color);
      updateBackground();
      break;
    }
  }
});


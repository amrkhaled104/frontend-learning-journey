const icon = document.querySelector(".icon");
const setting_content = document.querySelector(".setting_content");

icon.addEventListener("click", () => {
  setting_content.classList.toggle("show");
});

let colorSelect = document.querySelector(".colorfont");
let fontSelect = document.querySelector(".fonttype");
let sizeSelect = document.querySelector(".Fontsize");

let savedColor = localStorage.getItem("color") || "red";
let savedFont = localStorage.getItem("font") || "Cairo";
let savedSize = localStorage.getItem("size") || "26px";
console.log(icon);
console.log(setting_content);
console.log(colorSelect);
console.log(fontSelect);
console.log(sizeSelect);
let main = document.querySelector(".main");
main.style.cssText += `
  color:${savedColor};
  font-family:${savedFont};
  font-size:${savedSize};
`;
colorSelect.addEventListener("change", (e) => {
  localStorage.setItem("color", e.target.value);
  main.style.color = e.target.value;
});

fontSelect.addEventListener("change", (e) => {
  localStorage.setItem("font", e.target.value);
  main.style.fontFamily = e.target.value;
});

sizeSelect.addEventListener("change", (e) => {
  localStorage.setItem("size", e.target.value);
  main.style.fontSize = e.target.value;
});

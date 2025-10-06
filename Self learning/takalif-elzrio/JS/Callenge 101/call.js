//  Function to create an element
function createElement(type) {
    return document.createElement(type);
}

//  Create Header
let header = createElement("header");
header.style.cssText = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px 10px;
`;
//  Create Logo Section
let logo = createElement("div");
let logotext = createElement("h1");
logotext.textContent = "Amr";
logotext.style.cssText = "color: #02bb02; font-family: sans-serif;";
logo.appendChild(logotext);
header.appendChild(logo);

//  Create Navigation
let nav = createElement("ul");
nav.style.cssText = `
  list-style: none;
  display:flex;
  gap:10px;
`;

let listnav = ["Home", "About", "Service", "Content"];

// Function to create <li> with text
function createListItem(text) {
    let li = createElement("li");
    li.textContent = text;
    li.style.cssText = "cursor: pointer; font-weight: 500;";
    return li;
}

// 🔹 Add <li> items to <ul>
for (let i = 0; i < listnav.length; i++) {
    let li = createListItem(listnav[i]);
    nav.appendChild(li);
}

//  Append Navigation to Header and Header to Body
header.appendChild(nav);
document.body.appendChild(header);

//  Create Grid Container
let grid = createElement("div");
grid.style.cssText = `
  background-color: lightgray;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
//  Create 15 Product Cards
for (let i = 0; i < 15; i++) {
    let card = createElement("div");
    card.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `;

    // 🔸 Product Number
    let count = createElement("h1");
    count.textContent = `${i + 1}`;

    // 🔸 Product Label
    let prod = createElement("p");
    prod.textContent = "Product";
    prod.style.cssText = "color: gray; font-size: 18px; margin: 10px 0 0;";

    //  Append Elements
    card.appendChild(count);
    card.appendChild(prod);
    grid.appendChild(card);
}

//  Append Grid to Document
document.body.appendChild(grid);

//  Create Footer
let Footer = createElement("footer");
Footer.style.cssText = `padding:15px;
display:flex;
justify-content:center;
align-item:center;
background-color:green;
`;
Footer.innerHTML = "<h3>Copyright © 2025</h3>";
Footer.style.color = "white";
//  Append Footer to Document
document.body.appendChild(Footer);
// // 1
// document.getElementById("elzero");

// // 2
// document.getElementsByClassName("element")[0];

// // 3
// document.getElementsByTagName("div")[0];

// // 4
// document.querySelector("#elzero");

// // 5
// document.querySelector(".element");

// // 6
// document.querySelector("div");

// // 7
// document.querySelector("[name='js']");

// // 8
// document.querySelectorAll(".element")[0];

// // 9
// document.querySelectorAll("div")[0];

// // 10
// document.querySelectorAll("#elzero")[0];

// // 11
// document.body.firstElementChild;

// // 12
// document.body.children[0];

// // 13
// document.getElementsByName("js")[0];

// // 14
// document.querySelector("div.element[name='js']");

// // 15
// document.getElementById("elzero").closest("div");


// //2

// let imgs = document.querySelectorAll("img");
// console.log(imgs.length);
// for (let i = 0; i < imgs.length; i++) {
//   imgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   imgs[i].alt = "Test Image";
// }


//3
// let number = document.querySelector(`[name="dollar"]`);
// let div = document.querySelector(".result");
// number.addEventListener("input",(e)=>{
//   div.textContent = `{${number.value} USD Dollar = {${(number.value * 51).toFixed(2)}
// } Egyptian Pound}`
// }) 

//4


// let one = document.querySelector(".one"); 
// let two = document.querySelector(".two"); 
// let temp = one.getAttribute("title");
// one.setAttribute("title",two.getAttribute("title"));
// two.setAttribute("title",temp);
// let content = one.textContent;
// one.textContent = two.textContent;
// two.textContent = content + ` ${document.querySelectorAll("div").length}`;

//5

// let imgs = document.querySelectorAll("img");
// for (let i = 0; i < imgs.length; i++) {
//   if (imgs[i].getAttribute("alt")) {
//     imgs[i].setAttribute("alt", "Amr New");
//   }
//   else {
//     imgs[i].setAttribute("alt", "Old");
//   }
// }

//6 
const submit = document.querySelector(`[name="create"]`);
const numberofelement = document.querySelector(`[name="elements"]`);
const text = document.querySelector(`[name="texts"]`);
const select = document.querySelector(`[name="type"]`);
const result = document.querySelector(".results");

function create_element(type) {
  return document.createElement(type);
}

submit.addEventListener("click", (e) => {
  e.preventDefault(); 
  result.innerHTML = "";

  const numberFilled = numberofelement.value !== "";
  const textFilled = text.value !== "";
  const selectFilled = select.value !== "";

  if (!numberFilled || !textFilled || !selectFilled) {
    alert("Please fill all fields!");
    return;
  }

  const elementType = select.value.toLowerCase(); 
  const count = parseInt(numberofelement.value);

  for (let i = 1; i <= count; i++) {
    let el = create_element(elementType);
    el.setAttribute("class", "box");
    el.setAttribute("title", "Element");
    el.setAttribute("id", `id-${i}`);
    el.textContent = text.value;
    result.appendChild(el);
  }
});

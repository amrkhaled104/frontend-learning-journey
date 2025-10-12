// // let add = document.querySelector(".classes-to-add");
// // let remove = document.querySelector(".classes-to-remove");
// // let current = document.querySelector(".element.current");
// // let classes = document.querySelector(".classes-list");

// // add.addEventListener("blur", function (e) {
// //   let values = add.value.trim().split(" ").filter(v => v !== "");
// //   for (let i = 0; i < values.length; i++) {
// //     current.classList.add(values[i]);
// //     let spann = document.createElement("span");
// //     spann.textContent = values[i];
// //     let innerDiv = classes.children[1];
// //     innerDiv.appendChild(spann);
// //   }
// //    add.value = "";
// // });
// // remove.addEventListener("blur", () => {
// //  let values = remove.value.trim().split(" ").filter(v => v !== "");
// //   let innerDiv = classes.children[1];

// //   for (let i = 0; i < values.length; i++) {
// //     current.classList.remove(values[i]);

// //     let spans = innerDiv.querySelectorAll("span");
// //     spans.forEach(el => {
// //       if (el.textContent === values[i]) {
// //         el.remove();
// //       }
// //     });
// //   }
// //   remove.value = "";
// // });


// //2
// let parg = document.querySelectorAll("p");
// parg[0].remove();
// let div = document.querySelector(".our-element");
// let before = document.createElement("div");
// before.setAttribute("class","start");
// before.setAttribute("tilte", "Start Element");
// before.setAttribute("data-value", "Start");
// before.textContent = "Start";
// div.before(before);
// let after = document.createElement("div");
// after.setAttribute("class","End");
// after.setAttribute("tilte", "End Element");
// after.setAttribute("data-value", "End");
// after.textContent = "End";
// div.after(after);
//4
let lastdiv = document.querySelector("div");
let last = lastdiv.lastChild.textContent.trim();
console.log((last));

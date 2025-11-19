// //1
// let massage = prompt("Example: 5-20");
// let numbers = massage.split("-");
// let num1 = numbers[0];let num2 = numbers[1];
// if(num2<num1){
//   let temp = num1;
//   num1=num2;
//   num2=temp;
// }
// for(let i = num1; i<=num2 ; i++){
//   document.body.innerHTML += `<div>${i}</div>`;
// }

//2
// function popup() {
//   let div = document.createElement("div");
//   div.style.cssText = "color: white; background-color:gray ;font-size: 2rem; position:relative; width:400px ; height:200px ; margin:150px auto; display:flex; justify-content:center; align-items:center";
//   let welcometext = document.createTextNode("Welcome");
//   div.appendChild(welcometext);

//   let closer = document.createElement("button");
//   closer.textContent = "X";
//   closer.style.cssText = "color: white; background-color:red ; width:50px ; height:50px ;  border:1px white solid; position:absolute; top:-25px;right:-25px; border-radius:50%; display:flex; justify-content:center; align-items:center";

//   closer.addEventListener("click", () => {
//     div.remove(); 
//   });

//   div.appendChild(closer);
//   document.body.appendChild(div);
// }
// let popupp = setTimeout(popup, 5000);


//3
// let div = document.createElement("div");
// div.innerText = prompt("Enter Number To count Down Form It ");
// div.style.cssText = "color: white; background-color:black ;font-size: 2rem; position:relative; width:400px ; height:200px ; margin:150px auto; display:flex; justify-content:center; align-items:center";
// document.body.appendChild(div);
// let count =Number(div.innerHTML);
// let countdec = count;
// let timer = setInterval(() => {
//   div.innerHTML = count.toString();
//   count--;
// }, 1000);
// setTimeout(()=>{
// clearInterval(timer);
// },(count+1) * 1000);

//4

// let div = document.createElement("div");
// div.innerText = prompt("Enter Number To count Down Form It ");
// div.style.cssText = "color: white; background-color:black ;font-size: 2rem; position:relative; width:400px ; height:200px ; margin:150px auto; display:flex; justify-content:center; align-items:center";
// document.body.appendChild(div);
// let count = Number(div.innerHTML);
// let countdec = count;
// let timer = setInterval(() => {
//   div.innerHTML = count.toString();
//   count--;
// }, 1000);
// setTimeout(() => {
//   clearInterval(timer);
//   window.open("bebrs.html", "_blank","width=500,height=500");
// }, (count + 1) * 1000);

//5
// let div = document.createElement("div");
// div.innerText = prompt("Enter Number To count Down Form It ");
// div.style.cssText = "color: white; background-color:black ;font-size: 2rem; position:relative; width:400px ; height:200px ; margin:150px auto; display:flex; justify-content:center; align-items:center";
// document.body.appendChild(div);
// let count = Number(div.innerHTML);
// let countdec = count;
// let timer = setInterval(() => {
//   div.innerHTML = count.toString();
//   if (count === 5) {
//     window.open("bebrs.html", "_blank", "width=500,height=500");
//   }
//   if (count === 0) {
//     clearInterval(timer);
//   }
//   count--;
// }, 1000);

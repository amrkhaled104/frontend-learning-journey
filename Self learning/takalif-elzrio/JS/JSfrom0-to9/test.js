//1

/*
 Explanation:
 - Code One will NOT work. 
   Reason: It is executed in the <head> section before the <body> is loaded. 
   At that time, the element with id="el" does not yet exist in the DOM, 
   so document.getElementById("el") returns null and the code fails.

 - Code Two will work. 
   Reason: It runs inside window.onload, which waits until the entire page (including the <body>) is fully loaded, 
   so the element with id="el" is available.

 - Code Three will also work. 
   Reason: It is placed inside a <script> tag at the bottom of the <body>, 
   after the <h1 id="el"> element is already loaded in the DOM.
*/

//2
document.write(`<h1 id="el">ELzero</h1>`);
el.style.color="blue";
el.style.fontSize = "80px";
el.style.fontWeight = "bold";
el.style.textAlign = "center";
el.style.fontFamily = "Arial";

//3
console.log(`%cAmr %cKhaled %celsisy`," color:red; font-size:40px;","color:green; font-size:40px; font-weight:bold","background:blue; font-size:40px; color:white;");

//4
console.group("Group 1");
console.log("Massage one");
console.log("Massage Two");
console.group("child Group");
console.log("Massage one");
console.log("Massage Two");
console.group("Grand Child Group");
console.log("Massage one");
console.log("Massage Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Massage one");
console.log("Massage Two");

//5
let myFriends = ["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"];
console.table(myFriends);


//6

// Stop execution
throw new Error("Code execution stopped");

// This code will never run or use comment
console.log("Iam In Console");
document.write("Iam In Page");


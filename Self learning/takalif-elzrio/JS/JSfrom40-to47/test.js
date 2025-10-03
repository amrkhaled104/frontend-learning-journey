let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends=myFriends.reverse();
myFriends.shift();
console.log(myFriends.reverse()); // ["Ahmed", "Elham", "Osama"];

//2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

//3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
// finalArr=[].concat(arrTwo.pop(), arrOne.reverse(), arrTwo.reverse());
finalArr=[].concat(arrTwo).concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop()[0].slice(website.length).toUpperCase()); // ZERO

//5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)){
    console.log("Found");
}
if(haystack.indexOf(needle) !== -1){
    console.log("Found");
}
if(haystack.find((element) => element === needle)){
    console.log("Found");
}

//6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allAr = [];

// Your Code Here
allAr=[].concat(arr2.pop(),arr1.pop(),arr2.pop());
console.log(allAr.reverse().join("").toLowerCase()); // fxy
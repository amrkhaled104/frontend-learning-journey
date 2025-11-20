// const user ={
//   thename:"amr",
//   theage:20,
//   skills:["html","css","js"],
//   addresses:{
//     egypt:"cairo",
//     ksa:"riyadh"
//   }
// };
// ({thename:Name,theage:Age,skills:[firstskill,secondskill,thirdkill],addresses:{egypt:Egypt,ksa:Ksa}}=user);
// console.log(Name,Age,firstskill,secondskill,thirdkill,Egypt,Ksa);
// //challenge
// let chosen = 1;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// switch (chosen) {
//   case 1:
//     ({title,age,available,skills:[ ,last]}=myFriends[0]);
//     console.log(`${title},${age},${(available)?"Available":"Not Available"},${last}`)
//     break;
//   case 2:
//     console.log("This is Ahmed");
//     break;
//   case 3:
//     console.log("This is Sayed");
//     break;
//   default:
//     console.log("Unknown fruit");
// }

//1
// let myNumbers = [1, 2, 3, 4, 5];
// let [a, , , , e] = myNumbers;
// console.log(a * e);

//2
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a,b,c,[d,e,[f,g]]]=mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

//3
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let mergearr = [...arr1 , ...arr2 , ...arr3];
// console.log(mergearr);
// let [c, , , , , , , a , b ] =  mergearr
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

//4
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
// ({age:a,working:w,country:c,hobbies:[h1, ,h3]}=member);
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// console.log(`I Live in ${c}`);
// console.log(`My Hobbies Are: ${h1}, ${h3}`);

//5
// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };
// ({
//   title:t
//   ,developer:d
//   ,releases:{
//     ["Oath In Felghana"]:[u,j],
//     ["Ark Of Napishtim"]:{US:u_price , JAP:j_price},
//      Origin:or
//   },
//   } = game);
// const a = Object.keys(game.releases)[1];
// const o = Object.keys(game.releases)[0];
// console.log(`My Favourite Games Style Is ${t} Style`);
// console.log(`And I Love ${d} Games`);
// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// console.log(`Although I Love ${a}`);
// console.log(`${a} Price in USA Is ${u_price}`);
// console.log(`${a} Price in Japan Is ${j_price}`);
// console.log(`Origin Price Is ${or}`);

//6
let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
let [ , ,{title:t, age:a ,available:av,skills:[ ,s2]}] = myFriends;
console.log(`${t}\n${a}\n${av?"Available":"Not Available"}\n${s2}`)
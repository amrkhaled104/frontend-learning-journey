let start = 10;
let end = 100;
let exclude = 40;

outer: for (let i = start; i <= end; i += 10) {
  if (i === exclude)  continue outer;  
  console.log(i);
}
//2
let startt = 10;
let endd = 0;
let stop = 3;
 for (let i = startt; i >= endd; i --) { 
     console.log(i<10?`0${i}`:i);
     if(i==stop) break;
}
//3
let starttt = 1;
let enddd = 6;
let breaker = 2;
for(let i = starttt ; i <= enddd ; i++){
    console.log(i);
    for( let j=breaker ; j<=(breaker+breaker) ; j+=2){
        console.log(`-- ${j}`);
    }
}

//4
let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    if(index == 4) break;
    index-=jump;
}
//5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
friends=friends.filter( el =>{
    return !el.toLowerCase().startsWith(letter.toLowerCase());
} );

for(let i = 0 ; i < friends.length ; i++){
    console.log(`${i+1} => ${friends[i]}`);
}

//6
let star = 0;
let swappedName = "elZerO";
let result="";
for(let i=star;i<swappedName.length;i++){
    result+=swappedName[i]=== swappedName[i].toLowerCase()?swappedName[i].toUpperCase():swappedName[i].toLowerCase();
}
console.log(result);

//7
let stat = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
mix.shift();
for( let i = stat ; i < mix.length ; i++) {
    if(!Number.isInteger(mix[i])) continue;
    console.log(mix[i]);
}
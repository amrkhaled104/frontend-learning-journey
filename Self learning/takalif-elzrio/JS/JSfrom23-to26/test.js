//2
console.log(-Number.MIN_SAFE_INTEGER);

//3
console.log(Number.MAX_SAFE_INTEGER.toString().length);

//4
let myvat="100.56789 Views";
console.log(parseInt(myvat)); 
console.log(typeof(parseInt(myvat))); 
console.log(parseFloat(myvat).toFixed(2)); 
console.log(typeof(Number(parseFloat(myvat).toFixed(2)))); 

//5
let num=10;
console.log((Number(Number.isInteger(num))<<Number.isInteger(num)));

//6
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(num.toFixed(0))); // 10

//7
console.log(Math.floor(Math.random() * 5));


let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

mix = mix
    .map((ele) => {
        return Number.isInteger(ele) ? "" : ele;
    })
    .reduce((acc, cur) => {
        return acc + cur;
    });

console.log(mix);


//2
let myString = "EElllzzzzzzzeroo";
let mynew = myString.split("").filter((ele, index, arr) => {
    return ele != arr[index + 1];//not error if out of index return undeifined
});
console.log(mynew.join(""));

//3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
myArray = myArray.map((ele) => {
    return Array.isArray(ele) ? ele.reduce((acc, cur) => acc + cur) : ele
}).reduce((acc, cur) => acc + cur);
console.log(myArray);
//4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let onlyPositiveNum = numsAndStrings.filter((ele)=>{
    return typeof ele === "number";
}).map(ele=> ele>0?-ele:-ele
);
console.log(onlyPositiveNum);

//5
let nums = [2, 12, 11, 5, 10, 1, 99];
let eventt=nums.reduce((acc,cur)=>{
    return cur%2==0 ? acc*cur : cur+acc;
},1);
console.log(eventt);

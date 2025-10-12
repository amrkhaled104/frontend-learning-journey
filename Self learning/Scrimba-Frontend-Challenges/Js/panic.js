let panic =(string)=>{
    if(string.includes(" ")){
         return string.split(" ").join(" 😱 ") +"!";
    }
    else return string +"!"

}
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
console.log(panic("Hello!"))
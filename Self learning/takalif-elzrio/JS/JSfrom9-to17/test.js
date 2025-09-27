//1

let numberOne=10,numberTwo=20;
console.log(numberOne.toString()+numberTwo.toString());
console.log(typeof(numberOne.toString()+numberTwo.toString()));
console.log(`${numberOne.toString()}${numberTwo.toString()}`);
console.log(typeof(`${numberOne.toString()}${numberTwo.toString()}`));
console.log(numberOne+"\n"+numberTwo);
console.log(`${numberOne}\n${numberTwo}`);

//2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//3

console.log("\
    \`I'm In\
\\\
Love \\\ \"\"\" \'\'\'\
\+\+ With \+\+\
\\\"\"\"\\\"\"\"\
\"\"JavaScript\"\"\`\`\
")

//4
let a=21;
let b=20;
let c=`_${b.toString()}${a.toString()}_`;
console.log(`_${a}${c.repeat(2)}${b}_`);

function sayHello(theName, theGender) {
    switch (theGender) {
        case "Male":
            console.log(`Hello Mr ${theName}`);
            break;
        case "Female":
            console.log(`Hello Miss ${theName}`);
            break;
        default:
            console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//2
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        console.log("Second Number Not Found");
        return
    }
    switch (operation) {
        case "add":
        default:
            console.log(firstNum + secondNum);
            break;
        case "subtract":
            console.log(firstNum - secondNum);
            break;
        case "multiply":
            console.log(firstNum * secondNum);
            break
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//3
function ageInTime(theAge) {
    theAge < 10 || theAge > 100 ? console.log("Age out of range") :
        console.log(`Months ${theAge * 12} 
Weeks ${theAge * 12 * 4}
Days ${theAge * 12 * 30} 
Hours ${theAge * 12 * 30 * 24}
Minutes ${theAge * 12 * 30 * 24 * 60}
seconds ${theAge * 12 * 30 * 24 * 60 * 60}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//4
function checkStatus(a, b, c) {
    let name, age, status;

    if (typeof a === "string") name = a;
    if (typeof b === "string") name = b;
    if (typeof c === "string") name = c;

    if (typeof a === "number") age = a;
    if (typeof b === "number") age = b;
    if (typeof c === "number") age = c;

    if (typeof a === "boolean") status = a;
    if (typeof b === "boolean") status = b;
    if (typeof c === "boolean") status = c;

    console.log(
        `Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available" : "Not Available"
        } For Hire`
    );
}


// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// //5
// function createSelectBox(startYear, endYear) {
//     document.writeln("<select>");
//     for(let i = startYear ; i <= endYear ; i++){
//         document.writeln(`<option valur="${i}>${i}</option>`);
//     }
//     document.writeln("</select>");

// }
// createSelectBox(2000, 2021);

//6
function multiply(...number) {
    let result = 1;
    for (let i = 0; i < number.length; i++) {
        if (typeof number[i] === "number") {
            result *= Math.trunc(number[i]);
        }
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
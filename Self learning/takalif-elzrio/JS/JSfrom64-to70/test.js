function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        zName = zName.split(" ")[0] + " " + zName.split(" ")[1][0].toUpperCase() + ".";
        return `Hello ${zName},`;
    }
    function ageWithMessage(zAge) {
        zAge = zAge.split(" ")[0];
        return ` Your Age Is ${zAge},`
    }
    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    }
    function fullDetails() {
        return namePattern(zName) + ageWithMessage(zAge) + countryTwoLetters(zCountry);
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//2 
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


function specialMix(...data) {
    let sum = 0;
    for(let i=0 ; i < data.length ; i++){
        if(parseInt(data[i])) sum+=parseInt(data[i]);
    }
    return sum === 0 ? "All Is Strings" : sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

//functions can be called before initialization
//funcOne();

//function schema
//making functions saves blocks of code to be ran when we need it.
//INSTEAD of immediately running as the page loads
function funcOne() {
    console.log("Hello World");
    console.log(5 + 7);
};
//This is how we call function code blocks to run
//ex. funcName();
funcOne();

let numOne = 7;
let numTwo = 3;


//Scope: whether it's GLOBAL, BLOCK, FUNCTION SCOPE(Local scope)
function addTwoNums() {
    console.log(numOne + numTwo);
}
addTwoNums();

//This function is currently accepting two arguments (args)
function addTwoNumsV2(a,b) {
    console.log(a + b);
}
//We are sending data inside the arguments spots in functions;
addTwoNumsV2(numOne, numTwo);
addTwoNumsV2(6, 10);
addTwoNumsV2("Hello", " Zach!");

function greeting () {
    console.log("HI");  
}
greeting();

function greetingByName(name) {
    if (name == 'Mike') {

    } else {
        console.log("Hello, " + name + "! Welcome to the site.");
    }

}
greetingByName("Mike");
greetingByName("Sara");
greetingByName("Dayna");

function greetingByExcitment(name) {
    //THIS is variable is only being seen inside this function!
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName);

    //THIS IS Sending back the output of this function
    return upperCaseName;
}

//IF you ever need a function to send back new data, You'll need a return
let screamingName = greetingByExcitment("zach");

// upperCaseName
//console.log(upperCaseName); //!  ERRORED OUT BECAUSE LOCAL SCOPED TO "greetingByExcitment() function"

console.log(`HELLLLOOOOOO ${screamingName} IT'S NORTHERN LIGHT SUPLEX SINGER!!`);

// THIS FUNCTIONS SHOWS DEFAULT VALUE BEING ADDED IN THE ARGUMENTS
function sandwichMaker(typeOfBread, typeOfMeat = 'N/A', typeOfSauce, typeOfVeggie = 'N/A') {
    console.log(`Bread: ${typeOfBread}\nMeat: ${typeOfMeat}\nSauce: ${typeOfSauce}\nVeggie: ${typeOfVeggie}`);
}

let zachSandwich = sandwichMaker("white", "ham", "mayo", "lettuce");
let mikeSandwich = sandwichMaker("white", "rostierry chicken", "buffalo")


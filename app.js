
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
greetingByName("Bryan")

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




//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
 
//TODO Define an Array: Define an array containing a list of grades.
let grade = [66,78,85,92,100];
let resultAverage = checkAverage(grade);

//TODO Create a Function: Create a function to calculate the average of the grades.
function checkAverage (currentTest){
    let sum = 0;
    for (let i = 0; i < currentTest.length; i++) {
        sum += currentTest[i];
    }
    return sum / currentTest.length;
}

//TODO Create Another Function: Create another function to determine the letter grade based on the average.
let checkLetter = letterGrade(resultAverage);
function letterGrade(range) {
    let letterRange;
    switch (true) {
        case range >= 90:
            letterRange = 'A';
            break;
        case range >= 80:
            letterRange = 'B';
            break;

        case range >= 70:
            letterRange = 'C';
            break;

        case range >= 60:
            letterRange = 'D';
            break;

        default:
            letterRange = 'F';
            break;

    }
    return letterRange;
}
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.


//* Output Results: Use console.log to display the average grade and the corresponding letter grade.
console.log(`Your son average ${Math.floor(resultAverage)} which is a ${checkLetter}!`);
 


//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.
let balance = 200;

//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
//Add the money to the bank
function Bank_Deposit(amount) {
    balance += amount;
    console.log(`Deposited: ${amount}`);
}//end function

function Bank_Withdraw(amount) {
    //TERNARY OPERATOR
    //balance >= amount ? ((balance -= amount), console.log("Withdraw: $ " + amount)) : console.log("insufficent funds");
    //Check the request is less than your balance then withdraw
     if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ${amount}`);
        //If your balace is less than your request then it invalid!
    } else {
        console.log('Insufficient funds');
    }
        
}//end function

function Bank_CheckBalance() {
    //Check your amount in the Bank
    console.log(`Your new balance in the bank: ${balance}`);
}

//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.

//* Output Results: Use console.log to display the updated balance after each operation.
//Deposit money in the bank
Bank_Deposit(300);
//Withdraw money from the bank
Bank_Withdraw(250);
//Check your balance
Bank_CheckBalance();
 



 
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
 
//TODO Define an Array: Define an array to store the tasks.
let toDo = [];
//TODO Create Functions: Create functions to add a task and display the to-do list.
function addTask(task) {
    toDo.push(task);
    console.log(`Task assignment added: ${task}`);
    DisplayTask();
}

function DisplayTask() {
    
    listCount = 0;
    console.log("To-Do List:");
    for (let i = 0; i < toDo.length; i++) {
    listCount++;
    console.log(`${listCount}. ${toDo[i]}`);
}
/*
    toDo.forEach((task, display) => { 
        console.log(`${display + 1}. ${task}`);
    });*/
}
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.

//* Output Results: Use console.log to display the to-do list after each operation.
addTask("Milk");
addTask("Eggs");
addTask("Oats");

 
//! BONUS: Be able to remove a task o.o
function RemoveTask(item) {
    /*
    if (item > 0 && item <= toDo.length) {
        console.log(`Task ${toDo[item - 1]} removed`);
        toDo.splice(item - 1, 1);
        DisplayTask();
    } else {
        console.log("Invalid number!");
    } 
    */

        /*
    for(let i = 0; i < toDo.length; i++)
    if (toDo.length[i] == item) {
        toDo.length[i] = "DONE";
    }
        */

    let uppercaseTaskCompleted = item.toUpperCase();
    console.log(`${uppercaseTaskCompleted} is removed`);

    for (let i = 0; i < toDo.length; i++) {
        let currentTaskItem = toDo[i].toUpperCase();
        if (uppercaseTaskCompleted == currentTaskItem){
            toDo.splice(i, 1);
            console.log(toDo);
        }
        }

}

RemoveTask(toDo[2]);
 
 
//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.
 
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.

//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.

//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature
 
//* KelvinToCelsius conversion:
//* kelvinNum - 273.15
 
//* celsiusToKelvin:
//* celsiusNum + 273.15
 
//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
 
//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32
 
 
//TODO  Use if-else Statements: Use if-else statements to determine which conversion to perform based on the user's input.
//* Output Results: Use console.log to display the converted temperature.
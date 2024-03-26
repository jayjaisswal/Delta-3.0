console.log("hello", "World", (1 + 4))

// template literals
let a = 29;
let b = 29;
console.log(`The value of 'a' and 'b' is ${a + b} `)

//comparision operator
let c = 7;
let d = '7';
c == d; // return true
c === d; // return false

// if statement
let age = 18;
if (age == 18) {
    console.log("You are adult")
}

// Traffic light 
let color = "red";
if (color == "red") {
    console.log("please, stop")
}


//else if
let ages = 19;
if (ages < 18) {
    console.log("You are not adult");
}
else if (ages >= 18) {
    console.log("You are adult.");
}
else {
    console.log("You are alien");
}


// Practice question
let size = "kjn ";
if (size == "XL") {
    console.log("price is RS. 250");
}
else if (size == "L") {
    console.log("price is RS. 200");
}
else if (size == "M") {
    console.log("price is RS. 100");
}
else if (size == "S") {
    console.log("price is RS. 50");
}
else
    console.log("Please choose valid size");

//nested if else
let marks = 32;
if (marks >= 24) {
    console.log("pass")
    if (marks >= 30) {
        console.log("Grade A")
    }
    else
        console.log("Grade A")
}
else
    console.log("Fail")

// Question Practice
let name = "ajgjbe";
len = name.length;
if (len > 3 && name[0] == "a") {
    console.log("Good string");
}
else
    console.log("Not Good String")

// switch statement

let colors = "yellow";
switch (colors) {
    case "red":
        {console.log("Stop");
        console.log("Danger");
        break;}
    case "yellow":
        console.log("Get Ready");
        break;
    case "Green":
        console.log("Go");
        break;
        default:
            console.log("Not valid color")
}

//day of the weak
let day = 5;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
        default:
            console.log("Wrong day");
}

alert("Alert message");
console.error("This is an error message");
console.warn("This is an warning message");

let first_name = prompt("Enter your name");
console.log(first_name);
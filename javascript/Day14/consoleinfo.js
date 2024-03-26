// Using the console..................................................
console.log("1");
console.log("1+2");
console.log(1+2);

//  in console we can use ctrl + l to clear the console

// Variable.........................................................
b = 50;
console.log(b);

names = "jay"; 
console.log(names);

//f5 or ctrl+r ---> refresh current page of chrome

// Datatypes in js........................................................

a = 2;
console.log(typeof(a));
b = 2.4;
console.log(typeof(b));
c = 3/5;
console.log(typeof(c));
d = 43.9999999999999999999999999;
console.log(d); //44

naam = "jay The Great"
console.log(naam)
console.log(typeof(naam));

//Operation in js.....................................................
a = 3;
b = 4;
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// NaN in js --> Not a number...........................................
k = 0/0;
console.log(k);
console.log(typeof(k));

// Operator Precedence ................................................
console.log((2+1)*3);
console.log(3/1+2**2);
console.log(4+1*6/2);

// let, const, var keyword  --> similar like int datatype in cpp.................................
var l = 3.14;
console.log(l)
l = 4;  

const m = 3.14;
console.log(m);
// m = 4; Uncaught TypeError: Assignment to constant variable.

let n = 3.14;
console.log(n);
n = 3;

// in let and var we can update the value by reassigning to new value but not in const

// difference.............................................


// ................Scope:...............................
// Using var
function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Outputs: 10 (var is function-scoped)
}
varExample();

// Using let
function letExample() {
    if (true) {
        let y = 20;
    }
    // console.log(y); // Error: y is not defined (let is block-scoped)
}
letExample();


// .....................Hoisting:.................................
// Using var
console.log(a); // Outputs: undefined
var a = 5;

// Using let
// console.log(z); // Error: Cannot access 'b' before initialization
// let z = 10;

// ...........................Re-declaration:..................................
// Using var
var x = 5;
var x = 10;
console.log(x); // Outputs: 10

// Using let
// let s = 15;
// let s = 20; // Error: Identifier 'y' has already been declared


//....................... Global object property:....................................
// Using var
var globalVar = 100;
console.log(window.globalVar); // Outputs: 100 (in browser environment)

// Using let
let globalLet = 200;
console.log(window.globalLet); // Outputs: undefined (in browser environment)

// Question Practice .................................................
 let age = 23;
 age +2; //23
 console.log(age);
 age+=2 //25
 console.log(age);

// boolean
// true , false case sensitive 

//................String

naams = "hello brother"
console.log(naams.length)
console.log("jay" + " " + "Kumar")

// Question practice ..........................
let myname = "jay kumar";
console.log(`my name length is ${myname.length}`);

firstname = "jay";
console.log(firstname[0]);
console.log(firstname[-1]);//undefined
console.log(firstname[firstname.length - 1]);
console.log("ApnaCollege" + 123)

str = " ";
str1 = "";
console.log(str.length);
console.log(str1.length);




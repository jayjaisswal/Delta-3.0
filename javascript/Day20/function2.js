const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} gut avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}

//try and catch
try {
    console.log(a);
} catch (err) {
    console.log("variable is not defined");
    console.log(err);
}

//Arrow Function
//only return values

const sum = (a, b) => {
    console.log(a + b);
}
sum(3, 6);

const cube = (n) => {
    return n * n * n;
}


const cubes = n => {
    return n * n * n;
}

// another way to use the arrow function
const mul = (a, b) => (
    a * b
);

const add = (a, b) => (a + b);

// set timeout
// setTimeout(fun, time e.g., 4000 i,e., in mili sec)......................

console.log("hi there!");

setTimeout(() => {
    console.log("Apna College")
}, 4000);

console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");

// setInterval(function , timeout)........................................

let id = setInterval(() => {
    console.log("Apna College")
}, 4000);

clearInterval(id); // stop execution

let id2 = setInterval(() => {
    console.log("Coding combo")
}, 2000);

clearInterval(id2);

// this with arrow function.....................................................
const students = {
    name: "jay",
    marks: 95,
    prop: this,
    getname: function () {
        return this.name;
    },
    getMarks: () => {
        console.log(this);// parent's scope --> window
        return this.marks;
    },
    getinfo1: function () {
        setTimeout(() => {
            console.log(this);// student 
        }, 2000);
    },

    getinfo2 : function () {
        setTimeout(function (){
            console.log(this); // window
        }, 2000);
    }

};

//question
const square = (n) => {
    return n*n;
}

console.log(square(6));

//question 2
let id3 = setInterval(() =>{
    console.log("hello world");
}, 2000)

let id4 = setTimeout(() =>{
    clearInterval(id3);
    console.log("stopped!!")
}, 10000)




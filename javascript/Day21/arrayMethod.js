// forEach in array
let arr = [1, 2, 3, 4];


//  method 1
let print = function (el) {
    console.log(el);
};

arr.forEach(print);

// method 2
arr.forEach(function (el) {
    console.log(el);
});

//using arrow function
arr.forEach((el) => {
    console.log(el);
});

// forEach in array of objects
let array = [
    {
        name: "jay",
        marks: 95
    },
    {
        name: "shradha",
        marks: 92
    },
    {
        name: "Rana",
        marks: 97
    }
];

array.forEach((students) => {
    console.log(students);
});

array.forEach((students) => {
    console.log(students.marks);
});

//map function
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});



let gpa = array.map((el) => {
    return el.marks / 10;
});


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11];
let even = nums.filter((el) => {
    return el % 2 == 0;
});

// every(logical and)
let eve = [2, 4, 6, 8].every((el) => el % 2 == 0)
console.log(eve);// true

//some (logical or)
let sme = [2, 3, 5, 7].some((el) => el % 2 == 0)
console.log(sme);


//reduce
let red = [1, 2, 3, 4].reduce((res, el) => (res + el));
console.log(red);


//max
let a = [1, 2, 3, 4, 5, 6];
max = -1;
for (let i = 0; i < a.length; i++) {
    if (max < a[i]) {
        max = a[i];
    }

}
console.log(max);

// max using reduce function 
let redu = a.reduce((max, el) => {
    if (max < el) {
        return el;
    }
    return max;
})

console.log(redu);

// Default parameters
function sums(a, b = 3) {
    return a + b;
}
sums(2); //5

//spread
let minimum = Math.min(2, 3, 4, 6, 7, 9, 6, 4, 1)
console.log(minimum)


let arey = [2, 3, 4, 6, 7, 9, 6, 4, 1];
let mm = Math.min(...arr);
console.log(mm);
console.log(...arey);

console.log(..."Apna college");

//spread with array literals
let arr1 = [1, 2, 3, 4, 5, 6, 91];
let newarr = [...arr1];
console.log(newarr);

let chars = [..."hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let evens = [2, 4, 6, 8];
let numss = [...odd, ...evens];
console.log(numss);

// with object literals
let data = {
    email: "ironman@gmail.com",
    password: "abcd",

};

let datacopy = { ...data, id: 123 };

console.log(data);
console.log(datacopy);

// spreading array in term of object 
let arr2 = [1, 2, 3, 4, 5]; //val
let obj1 = { ...arr };
console.log(obj1);

// also with string
let obj3 = { ..."codingcombo" };
console.log(obj3);

//rest
function sum2(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us:", args[i]);
    }
}
//calling
// sum2(1)
// sum2(1, 2)
// sum2(1, 2, 3)

console.log(sum2(1));
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3));

function min(a, b, c, d) {
    console.log(arguments);
}
//output
//min(1,2,3,4)
//arrayMethod.js:168 Arguments(4) [1, 2, 3, 4,..]

function min1() {
    console.log(arguments);
}
//same output
// min1(1,2,3,4)
// arrayMethod.js:175 Arguments(4) [1, 2, 3, 4,

function min2() {
    console.log(arguments.length);
}// min1(1,2,3,4)--> 4

// argument is not an array it a collection so array method like push , pop etc will not work on it so for that we use rest method

/*example
 function sum3(){
    return arguments.reduce((sum, el) => sum + el);
} as it will not work because agrguments is not an array it is a collection*/

function sum3(...args){
    return args.reduce((sum, el) => sum + el);
}

function min4(msg, ...args){
    console.log(msg);
    return args.reduce((min4,el) =>{
        if(min4>el){
            return el;
        }else{
            return min4;
        }
    })
}


//destructuring-->specific info
let names = ["tony", "mony", "sony", "jony", "rohny"];

// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];
// another way 
let[winner, runnerup, secondrunnerup, ...other] = names;

// Destructuring in objs
const student = {
    name: "karan",
    age:14,
    class:8,
    subjects: ["hindi", "english", "maths", "science"],
    username: "karan@kfkjv",
    password: "abcd"
}

// let username = student.username;
// let password = student.username;

let {username, password} = student;
// or
let {username: user , password: secret, city: palace = "Mumbai"} = student;
















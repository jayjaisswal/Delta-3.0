let msg = "  jay  "
console.log(msg)
console.log(msg.trim()) 
console.log(msg.toUpperCase()) 

// string with argument
console.log(msg.indexOf("s")) //-1
console.log(msg.indexOf("a")) //3 as spaces are also count
// chaining
console.log(msg.trim().toUpperCase())

//slice
let a = "hello"
console.log(a.slice(0 ,3));
console.log(a.slice(0 ));
console.log(a.slice(2));

//replace
let b = "helloWorld";
console.log(b.replace('W','z'));
console.log(b.repeat(4));

// Array
let student = ["jay","rana","navin","Sushant"] ;
console.log(student)
typeof(student) //'object'

//mixed array
let info = ["jay", 25, 6.34];

// empty array
let newarr = [];

//push pop shift unshift
student.push("Prakash");
console.log(student)
student.pop();
console.log(student)


//practice
let start = ['january', 'july', 'march', 'august'] // o/p we want['july', 'june', 'march', 'august']
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");


// array concatination
// student.concat.info();
console.log(student.concat(info));

// practice using splice
let starts = ['january', 'july', 'march', 'august'] // o/p we want['july', 'june', 'march', 'august']
starts.splice(0,1);
starts.splice(1,0,"june");

//reverse
starts.reverse().indexOf("june"); //1

const arr = [1,2,3];
// nested array
let nums = [[1,2],[3,4],[5,6]];

//practice question
let game = [['x', null, 0],[null, 'x', null],[0, null, 'x']];

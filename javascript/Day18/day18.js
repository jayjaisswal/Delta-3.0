// Creating object literls
const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"

};

const item = {
    price: 100.3,
    discount: 40,
    colors: ["red", "green"]
};

// update the value
student.city = "Mumbai";
//delete
delete student.name;

//nested object
const classInfo = {
    aman: {
        Grade: "A",
        city: "Delhi"
    },
    shradha: {
        Grade: "A",
        City: "Pune"
    },
    karan: {
        Grade: "O",
        City: "Patna"
    }
};

// Array of object
const classInfon = [
    {
        name: "Aman",
        Grade: "A",
        city: "Delhi"
    },
    {
        Name: "Sharadha",
        Grade: "A",
        City: "Pune"

    },
    {
        Name: "Karan",
        Grade: "O",
        City: "Patna"
    }

];

// maths object
// Math.E
// 2.718281828459045
// Math.PI
// 3.141592653589793

// methods

console.log(Math.abs(-7)); //7

console.log(Math.pow(2,3)); //8

console.log(Math.floor(5.9999)); //5  -->Floor means zamin means km dega

console.log(Math.floor(-5.9999)); //-6

console.log(Math.ceil(5.9999)); //6

console.log(Math.ceil(-5.9999)); //-5

console.log(Math.random());

// converting random number into integer
// From 1 to 10
console.log(Math.ceil(Math.random()*10)); // by me

console.log(Math.floor(Math.random() * 10 ) + 1);

//from 1 to 100
console.log(Math.floor(Math.random() * 100 ) + 1);

//from 1 to 5
console.log(Math.floor(Math.random() * 5 ) + 1);

// 21 to 25
console.log(Math.floor(Math.random() * 5 ) + 21);




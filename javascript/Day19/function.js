function hello(){
    console.log("hello");
}

hello();

function print1to5(){
    for(let i =1;i<=5;i++){
        console.log(i);
    }
}

print1to5();

function rollDice(){
    let rand = Math.floor(Math.random() * 6) +1;
    console.log(rand);
}

rollDice();
rollDice();

//function with argument

function naam(name){
    console.log(name);
}

naam("joy");


function info(name, age){
    console.log(`${name} and age is ${age}`);
}

info("joy", 88);

// average of 3 number
function avg(a, b, c){
    console.log((a+b+c)/3);
}

avg(1, 2, 3);

// multiplication of any table
function mul(n){
    for(let i = n;i<=n*10;i+=n)
    console.log(i);
}

mul(2);

 // return
 function sum(a, b){
    return a+b;
 }

 console.log(sum(2, 8))

 function isAdult(age){
    if(age >=18)
    return "Adult";
    else return "Not adult";
    console.log("bye bye")
 }

 //sum of numbers from 1 to n
 sum = 0;
 function sumofnum(n){
    for (let i = 1;i<=n;i++)
   { sum +=i;}
    console.log(sum);
 }

 let str = ["hi", "hello", "bye", "!"];
 function concat(str)
 {
    let result = "  ";
    for(let i =0; i<str.length; i++){
        result +=str[i];
    }
    return result;
 }


 // function expression
 const sums = function(a,b){
    return a+b;
 }

 let hellos = function(){
    console.log("Hello")
 }

 //higher order function

 function multiplegreet(func, n){
    for(let i = 1; i<=n; i++){
        func();
    }
 }
 let greet = function(){
    console.log("hello")
 }

 multiplegreet(greet, 2);

 // return a function

 function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("Wrong request");
    }
 }
 

 //methods
 const calculator = {
    add: function(a, b){
        return a+b;
    },
    sub : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a*b;
    }
 }
 
 // method 2
 const calculatorr = {
    add(a, b){
        return a+b;
    }, 
    sub(a, b){
        return a- b;
    }
 }

 // question
 
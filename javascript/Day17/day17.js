for (let i = 1;i<=5;i++)
{
    console.log(i);
}

// table of any number
// let n = prompt("Enter the number :");

//n is string so we have to convert it into integer

// n = parseInt(n);
// for(let i = n;i<=n*10;i+=n)
// {
//     console.log(i);
// }

//while loop
let i = 1;
while(i<=5)
{
    console.log(i);
    i++
}

//nested loop

students = [["rahul", 87],["anushka", 98],["aarush", 99]];
for (let i = 0;i<students.length;i++)
{
    for (let j = 0;j<students[i].length;j++)
    {
        console.log(students[i][j]);
    }
}
// for of loop
for (i of students)
{
    console.log(i);
}
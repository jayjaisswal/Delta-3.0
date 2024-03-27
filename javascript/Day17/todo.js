let todo = [];

let req = prompt("Please enter your request"); 

while(true)
{
    if (req == "quit")
    {
        console.log("Quiting app");
        break;
    }

    if (req == "list")
    {
        console.log("-------------------------");
        for(let i = 0; i< todo.length; i++)
        {
            console.log(i, todo[i]);
        }
        console.log("-------------------------");
    }

    else if(req == "add"){
        let task = prompt("enter the task you want to store .");
        todo.push(task);
        console.log("Task added")
    }
    else if(req == "delete")
    {
        let idx = prompt("please enter the task index ")
        todo.splice(idx, 1);
        console.log("task deleted")
    }else{
        console.log("Wrong request")
    }
    
    req = prompt("Please enter your request"); 
}
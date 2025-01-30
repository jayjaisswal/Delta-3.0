const fs = require('fs'); //fs is file system module The fs module allows you to perform file operations like reading, writing, deleting, renaming, and modifying files.



console.log("Welcpme to coding combo");

fs.writeFile("output.txt", "Writing File", (err) => {
if(err)  console.log("Error Occured");
else   console.log('File written Successfully');
});
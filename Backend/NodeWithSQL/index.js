// Importing the faker library to generate random user data
const { faker } = require('@faker-js/faker');

// Importing the mysql2 library to interact with MySQL database
const mysql = require("mysql2");

// Comment indicating a command to run MySQL server in terminal:
// & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p

// Creating a connection to the MySQL database with the specified credentials
const connection = mysql.createConnection({
    host: "localhost",     // The hostname of the database
    user: "root",          // The MySQL user to authenticate as
    database: "delta_app", // The name of the database to connect to
    password: "jay123@A"   // The password of the MySQL user
});

// Attempting to query the database to show all tables
// let q = "SHOW TABLES";
// try {
//     // Executing the query to get the list of tables in the database
//     connection.query("q", (err, result) => {
//         if (err) throw err;   // If there's an error, throw it
//         console.log(result);  // Log the result to the console
//     });

// } catch (err) {
//     // If an error occurs during the try block, catch it and log it
//     console.log(err);
// }

// INSERTING VALUES
// let i = "INSERT INTO USER(id, username, email, password)values(?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];


// multiple insertion
let i = "INSERT INTO USER(id, username, email, password)values(?, ?, ?, ?)";
let user = [["123a", "123_newusera", "abc@gmail.coma", "abca"],
            ["123b", "123_newuserb", "abc@gmail.comb", "abcb"]
];


try {
  // Executing the query to get the list of tables in the database
  connection.query(i, user, (err, result) => {
      if (err) throw err;   // If there's an error, throw it
      console.log(result);  // Log the result to the console
  });

} catch (err) {
  // If an error occurs during the try block, catch it and log it
  console.log(err);
}

// Ending the connection to the database
connection.end();

// Function to generate a random user object using faker library
let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),         // Generate a random UUID for Id
    username: faker.internet.userName(), // Generate a random username
    email: faker.internet.email(),       // Generate a random email address
    password: faker.internet.password(), // Generate a random password
  };
};

// Example usage (uncomment to use):
// console.log(getRandomUser());

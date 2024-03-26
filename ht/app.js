const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/appointment', (req, res) => {
    const { name, email, date, time, doctor } = req.body;
    // Here you can handle the appointment data, like storing it in a database.
    res.send('Appointment booked successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

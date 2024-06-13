const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let notifications = [];
let submissions = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dash.html'));
});

app.post('/submit', (req, res) => {
    const { firstName, lastName, companyName, companyAddress, contactNumber, emailAddress } = req.body;
    const submission = { firstName, lastName, companyName, companyAddress, contactNumber, emailAddress };
    
    submissions.push(submission);
    notifications.push(`New submission from ${firstName} ${lastName}`);
    
    res.status(204).send();
});

app.get('/notifications', (req, res) => {
    res.json({ notifications, submissions });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

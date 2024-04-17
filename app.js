const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello, ERIC Robotics!');
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'This is some data from the server.',
        timestamp: new Date()
    };
    res.json(data);
});

app.post('/api/echo', (req, res) => {
    const { message } = req.body;
    res.json({ echo: message });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app; // Export app for testing purposes

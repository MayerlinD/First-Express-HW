// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', (req, res) => {
  	res.send('<h1>Hello World</h1>');
});

app.get('/greeting/:name', (req, res) => {
    const user = req.params.name
    res.send(`<h1>Greetings ${user}</h1>`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const ans = (parseInt(req.params.tipPercentage) / 100) * parseInt(req.params.total)
    res.send(`<h1>Your tip amount is ${ans}</h1>`);
});


// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});
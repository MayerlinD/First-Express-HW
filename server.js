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
    res.send(`<h1>Your tip amount is $${ans}</h1>`);
});


app.get('/magic/:question', (req, res) => {
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomIndex = Math.floor(Math.random() * arr.length);
    const magicQuestion = arr[randomIndex]; 
    const question = req.params.question 
    res.send(`<h1>Your question: ${question}?<br>Magic ball says: ${magicQuestion}</h1>`);
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});
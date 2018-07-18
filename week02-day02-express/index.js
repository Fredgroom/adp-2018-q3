const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3300;
let quotes = [
    {
        name: 'Fred Brooks',
        text: 'Nine people can’t make a baby in a month.',
    },
    {
        name: 'Paul Ford',
        text: 'A computer is a clock with benefits.',
    },
    {
        name: 'Linus Torvalds',
        text: 'Talk is cheap. Show me the code.',
    },
];

function diyLogger(request, response, next) {
    const startDate = new Date();
    const startTime = startDate.getTime();
    const { url, method } = request;
    const { statusCode } = response;

    response.on('finish', () => {
        const finishDate = new Date();
        const finishTime = finishDate.getTime();
        const timeDelta = finishTime - startTime;

        console.log(`${method} ${url} ${statusCode} ${timeDelta}ms`);
    });
    next();
}

app.use(diyLogger);

app.use(express.static('public'));

app.get('/quotes', (request, response) => {
    response.send(quotes);
});
app.post('/quotes', bodyParser.json(), (request, response) => {
  const newQuote = request.body;
  // Add your new quote to the quotes array
  quotes.push(newQuote);
  // Then send back a 201 status
  response.status(201).json(newQuote);
  // And also send the new quote as JSON in the response
});
app.get('/quotes/:name', (request, response) => {
    const { name } = request.params;
    const matchedQuote = quotes.find((quote) => name === quote.name);

    if (!matchedQuote) {
        response.status(404).json('That person isn\'t quote-worthy.');
    } else {
        response.json(matchedQuote.text);
    }
});
qpp.delete('/quotes/:name', (request, response) => {
    const { name } = request.params;

    quotes = quotes.filter( (quote) => quote.name !== name);

    response.status(200).json(quotes);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
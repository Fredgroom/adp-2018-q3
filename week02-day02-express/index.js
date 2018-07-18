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

app
    .route('/quotes')
    .get((request, response) => {
        response.send(quotes);
    })
    .post(bodyParser.json(), (request, response) => {
        const newQuote = request.body;
        // Add your new quote to the quotes array
        quotes.push(newQuote);
        // Then send back a 201 status
        // And also send the new quote as JSON in the response
        response.status(201).json(newQuote);
    });

app
    .route('/quotes/:name')
    .get((request, response) => {
        const { name } = request.params;
        const matchedQuote = quotes.find((quote) => name === quote.name);

        if (!matchedQuote) {
            response.status(404).json('That person isn\'t quote-worthy.');
        } else {
            response.json(matchedQuote.text);
        }
    })
    .delete((request, response) => {
        // Retrieve the name from the request
        const { name } = request.params;
        // Remove the quote from the quotes array
        quotes = quotes.filter((quote) => quote.name !== name);
        // Send back the 200 status with the response
        response.status(200).json(quotes);
    });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
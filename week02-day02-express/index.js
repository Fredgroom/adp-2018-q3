const express = require('express');
const app = express();
const port = 3300;
// app.get('/', function(request, response) {
//   response.send('Hello, world!');
// });

const quotes = [
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
app.use((request, response, next) => {
  console.log(`RECEIVED ${request.method} ${request.path}`)
  next();
});

// app.get('/', function(request, response) {
//   response.send('hello world');
// });
// app.get('/quotes', function(request, response) {
//   response.send(quotes);
// });
app.use(express.static('public'));

app.listen(port, ()=> {
  console.log(`Server running @ http://localhost:${port}`);
});
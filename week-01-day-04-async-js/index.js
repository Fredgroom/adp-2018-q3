const request = require('request');
const url = 'https://thecatapi.com/api/images/get';

request(url, (error, response, body) => {
    console.log('response.headers:', response.headers);
});



// deeply nested function 

// const request = require('request');
// const url = 'https://thecatapi.com/api/images/get';

// request(url, (error, response, body) => {
//     console.log('original_image 1:', response.headers.original_image);
//     request(url, (error, response, body) => {
//         console.log('original_image 2:', response.headers.original_image);
//         request(url, (error, response, body) => {
//             console.log('original_image 3:', response.headers.original_image);
//         });
//     });
// });
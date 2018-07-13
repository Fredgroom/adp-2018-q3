const request = require('request');
const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = `${baseUrl}/posts`;

function requestWithPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(`request to ${url} failed`);
                return;
            }
            resolve('body.length: ' + body.length);
        });
    });
};

async function getUrl(url) {
    try {
        const response = await requestWithPromise(url);
        console.log('OK: response:', response);
    } catch (error) {
        console.log('ERROR:', error);
    }
}

getUrl(postsUrl);
getUrl('bad://' + postsUrl);


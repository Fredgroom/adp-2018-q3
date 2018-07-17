const request = require('request');
const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = `${baseUrl}/posts`;


var rp = require("request-promise");
async function getUrl(url) {

    try {
        const response = await rp(url);
        console.log('OK: response:', response);
    } catch (error) {
        console.log("ERROR:", error);

    }
}
getUrl(postsUrl);
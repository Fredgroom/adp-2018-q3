const request = require('request');
const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = `${baseUrl}/posts`;
const albumsUrl = `${baseUrl}/albums`;


function requestWithPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(`request to ${url} failed`);
                return;
            }
            resolve(body);
        });
    });
};

requestWithPromise(postsUrl)
    .then((response) => {
        console.log('===posts===');
        const jsonPosts = JSON.parse(response);
        jsonPosts.forEach((item, index) => {
            if (index < 10) {
                console.log(index + 1, item.title);
            }
        });
        return requestWithPromise(albumsUrl)
    }).then((response) => {
        console.log('===albums===');
        const jsonAlbums = JSON.parse(response);
        jsonAlbums.forEach((item, index) => {
            if (index < 20) {
                console.log(index + 1, item.title);
            }
        })
        console.log('Done!');
    }).catch((error) => {
        console.log('ERROR', error);
    });



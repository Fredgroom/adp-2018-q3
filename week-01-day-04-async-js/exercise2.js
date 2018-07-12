const request = require('request');
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';


request(postsUrl, (error, response, body) => {
    console.log('===posts===');
    const jsonPosts = JSON.parse(body);
    jsonPosts.forEach((item, index) => {
        if (index < 10) {
            console.log(index + 1, item.title);
        }
    })
    request(albumsUrl, (error, response, body) => {
        console.log('===albums===');
        const jsonAlbum = JSON.parse(body);
        jsonAlbum.forEach((item, index) => {
            if (index < 20) {
                console.log(index + 1, item.title);
            }
        })
        console.log('Done!');
    });
});


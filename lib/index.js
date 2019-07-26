var fetchreq = require('node-fetch')

getPosts = () => {
    return new Promise((resolve, reject) => {
        fetchreq("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => resolve(json));
    });
};

module.exports = {
    getPosts
}

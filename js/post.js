function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}
function displayPost(posts) {
    for (const post of posts) {
        console.log(post);
    }
};

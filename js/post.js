function seePost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(post => post.json())
        .then(data => postContain(data))
}
seePost();

function postContain(posts) {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
        `
        postContainer.appendChild(div)
    }
}
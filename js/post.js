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

function album() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => getAlbum(data))
}
// album()
let count = 0;

function getAlbum(albums) {

    const div = document.getElementById('album-container')
    for (const album of albums) {
        const p = document.createElement('p')
        p.classList.add('post2')
        p.innerText = ` ${count++} =  ${album.title}`
        div.appendChild(p)

    }
}
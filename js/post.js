function seePost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(post => post.json())
        .then(data => postContain(data))
}
// seePost();

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
let count = 1;
let counts = 1;

function getAlbum(albums) {

    const div = document.getElementById('album-container')
    for (const album of albums) {
        const p = document.createElement('p')
        p.classList.add('post2')
        p.innerText = ` ${count++} =  ${album.title}`
        div.appendChild(p)

    }
}

function photos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => photogallery(data))
}

function photogallery(photoss) {
    const photos = document.getElementById('photos-section')
    for (const photo of photoss) {
        const div = document.createElement('div')
        div.style.textAlign = 'center'
        div.style.margin = '0 auto'
        div.innerHTML = `
        <h4> ${counts++} = ${photo.title} </h4>
       
        <img src="${photo.url}" alt="">
        `
        photos.appendChild(div)
    }
}
// JSON placeholder, GET data, display data on UI

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log('Fetch 1st', json))


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json()).then(data => console.log(data))
}
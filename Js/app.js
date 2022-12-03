/*
function hello(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => output(data))
}

function output(jeson){
    const creat = document.getElementById('ored');
    for (const item of jeson) {
        const li = document.createElement('li');
        li.innerText = item.name;
        creat.appendChild(li)
        
    }
}

console.log('loge');

*/


function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postId(data))
}

function postId(input){
    const creat = document.getElementById('ored');
    for (const item of input) {
        const li = document.createElement('div');
        li.innerHTML = `
        <h2>User Id:${item.id}</h2>
        <h3>Title: ${item.title}</h3>
        <p>Dis:${item.body}</p>
        `
        creat.appendChild(li)
    }
}

post()
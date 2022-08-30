// add name
function loudusers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display1(data))

}
function display1(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }
}
// update option
loadpost();

function deletepost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}
function patchpost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
function createpost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

// add email
function louad3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display2(data))
}
function display2(data) {
    const ol = document.getElementById('user-email');
    for (const usemail of data) {
        const li = document.createElement('li');
        li.innerText = usemail.email;
        ol.appendChild(li);
    }
}
// add comment
function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postdisplay(data))
}
function postdisplay(posts) {

    const postshow = document.getElementById('post-input');
    for (const post of posts) {

        const div = document.createElement('div');
        div.classList.add('post1');
        div.innerHTML = `
            <h3> User Id : ${post.userId} </h3>
            <h5> Id : ${post.id}
            <p> Tittle :${post.title} </p>
            <p> Body : ${post.body}</p>
            `;
        postshow.appendChild(div);
    }

}

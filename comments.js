function loadcomments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displaycomments(data))
}
function displaycomments(comments) {
    const commenstpeople = document.getElementById('comment-continer');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('post1');
        div.innerHTML = `
        <h3> Posted Id: ${comment.postId}</h3>
        <p> Id : ${comment.id}</p>
        <p> Name : ${comment.name}</p>
        <p> Email : ${comment.email}</p>
        <p> Body : ${comment.body}</p>
        `;
        commenstpeople.appendChild(div);
    }
}
loadcomments();
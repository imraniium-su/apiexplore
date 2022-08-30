function loadtodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => display(data))
}
function display(todos) {
    const todocontiner = document.getElementById('todo-continer')
    for (const todo of todos) {
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>Tittle : ${todo.title}</h3>
        <p> User : ${todo.userId}
        <p> Is completed : ${todo.completed === true ? 'Complted' : 'Not completed'}


        `;
        todocontiner.append(div);
    }
}
loadtodos();
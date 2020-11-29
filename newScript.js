const ul = document.querySelector('ul');
const input = document.querySelector('input');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('form');
const baseUrl = "https://us-central1-js04-b4877.cloudfunctions.net/tasks"
receiveData()
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = input.value
    createTask(baseUrl, inputValue)
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const checkbox = document.createElement('input');
    // listItem.setAttribute('data-id', taskID);
    listItem.appendChild(checkbox);
    listItem.appendChild(listText);
    listText.textContent = inputValue;
    listItem.appendChild(deleteBtn);
    deleteBtn.textContent = 'Delete';
    // ul.appendChild(listItem);
    input.value = ''
})


function createTask(url, text) {
    fetch(url + '/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text })
    })
        .then(response => response.json())
}
function deleteTask(url, id) {
    let deleteUrl = url + "/" + id;
    fetch(deleteUrl, {
        method: "DELETE"
    })
}
function checkTask(id) {
    fetch(baseUrl + '/check/' + id, {
        method: "POST"
    })
}
function unCheckTask(id) {
    fetch(baseUrl + '/uncheck/' + id, {
        method: "POST"
    })
}
function receiveData(){
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        const dataText = data.data
        dataText.forEach(element => {
            let taskCompleted = element.completed
            const taskID = element.id
            const listItem = document.createElement('li');
            const listText = document.createElement('span');
            const deleteBtn = document.createElement('button');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            listItem.setAttribute('data-id', taskID);
            listItem.appendChild(checkbox);
            listItem.appendChild(listText);
            listText.textContent = element.text;
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = 'Delete';
            ul.appendChild(listItem);
            if (element.completed == true) {
                checkbox.setAttribute("checked", "true")
            }
            deleteBtn.addEventListener("click", () => {
                deleteTask(baseUrl, taskID)
            })
            checkbox.addEventListener('change', () => {
                if (element.completed == true) {
                    unCheckTask(taskID)
                } else {
                    checkTask(taskID)
                    checkbox.setAttribute("checked", "true")
                }
            })
        });
    })
}
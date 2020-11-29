const ul = document.querySelector('ul');
const input = document.querySelector('input');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('form');
fetch('https://us-central1-js04-b4877.cloudfunctions.net/tasks')
    .then(response => response.json())
    .then(data => {
        const dataText = data.data
        dataText.forEach(element => {
            const taskCompleted = element.completed
            // console.log(taskCompleted)
            const taskID = element.id
            const listItem = document.createElement('li');
            const listText = document.createElement('span');
            const deleteBtn = document.createElement('button');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            if(taskCompleted == true){
                
                console.log(taskCompleted + taskID)
                
            }
            listItem.setAttribute('data-id', taskID);
            listItem.appendChild(checkbox);
            listItem.appendChild(listText);
            listText.textContent = element.text;
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = 'Delete';
            ul.appendChild(listItem);
        });
    })
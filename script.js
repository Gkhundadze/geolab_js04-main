// VARIABLES
  const ul = document.querySelector('ul');
  const input = document.querySelector('input');
  const submitBtn = document.querySelector('#submit');
  const form = document.querySelector('form');
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const deleteBtn = document.createElement('button');
  const checkbox = document.createElement('input');
  
  
  
  
  
  
  
  fetch('https://us-central1-js04-b4877.cloudfunctions.net/tasks',{
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
    let taskList = data.data
    taskList.forEach(task => {
      const listItem = document.createElement('li');
      const listText = document.createElement('span');
      const deleteBtn = document.createElement('button');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
        listItem.appendChild(checkbox);
        listItem.appendChild(listText);
        listText.textContent = task.text;
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';
        ul.appendChild(listItem);
        
        // STYLING
        ul.style.listStyleType = "none"
        deleteBtn.classList.add("btn", "btn-secondary", "btn-sm")

    });
    // console.log()
    
  })
 
 
  
  
  
  
  
 
  
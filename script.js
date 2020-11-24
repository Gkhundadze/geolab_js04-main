// VARIABLES
  const ul = document.querySelector('ul');
  const input = document.querySelector('input');
  const submitBtn = document.querySelector('#submit');
  const form = document.querySelector('form');
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const deleteBtn = document.createElement('button');
  const checkbox = document.createElement('input');
  const receiveData = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks';
  const addData = "https://us-central1-js04-b4877.cloudfunctions.net/tasks/create";
  
  // STYLING
  ul.style.listStyleType = "none"
  deleteBtn.classList.add("btn", "btn-secondary", "btn-sm");
  
  checkData(receiveData);
  form.addEventListener("submit",(fun) => {
    fun.preventDefault();
    let inputValue = input.value;
    createTask(inputValue);
    checkData(receiveData);
  });
  
  
  
  function checkData(url){
    fetch(receiveData,{
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
  });
  };
  function createTask(inputValue){
    fetch(addData,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({text: inputValue})
  })
  .then(response => response.json())
  .then(data => {
    input.value = '';
    input.focus();
    dataToHTM(data);
  });
}
function dataToHTML(text){
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
  });
};

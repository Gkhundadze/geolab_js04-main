// VARIABLES
  const ul = document.querySelector('ul');
  const input = document.querySelector('input');
  const submitBtn = document.querySelector('#submit');
  const form = document.querySelector('form');
  const receiveData = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks';
  const addData = "https://us-central1-js04-b4877.cloudfunctions.net/tasks/create";

  
checkData(receiveData);
form.addEventListener("submit",(event) => {
  event.preventDefault();
  const inputValue = input.value;
  if(!inputValue == ""){
    createTask(inputValue);
  }else{
    alert("შეიყვანეთ დასახელება")
  }
});


                                // F U N C T I O N S

// receive Data from API
function checkData(url){
  fetch(url,{
  method: "GET"
})
.then(response => response.json())
.then(data => {
  const taskList = data.data;
  taskList.forEach(task => {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    listItem.setAttribute('data-id', task.id);
    checkbox.checked = status;
    listItem.appendChild(checkbox);
    listItem.appendChild(listText);
    listText.textContent = task.text;
    listItem.appendChild(deleteBtn);
    deleteBtn.textContent = 'Delete';
    ul.appendChild(listItem);
    deleteBtn.addEventListener('click', () => {
      ul.removeChild(listItem);
      deleteTask(receiveData, task.id);
      console.log(task.id)
    });
    checkbox.onchange = ()=>{
      if(checkbox.checked){
        listText.style.textDecoration = "line-through";
        listText.style.backgroundColor = "#7dc07d";
        listText.style.letterSpacing = 4 + "px";
        listText.style.fontWeight = "bold";
    }else{
      listText.style.textDecoration = "none";
      listText.style.backgroundColor = "transparent";
      listText.style.letterSpacing = 1 + "px";
      listText.style.fontWeight = "normal";
    }
    }
    

      
      
      // STYLING
      ul.style.listStyleType = "none"
      deleteBtn.classList.add("btn", "btn-secondary", "btn-sm")
  });
});
};
  // AddTask to API
  function createTask(text){
    fetch(addData,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({text: text})
  })
  .then(response => response.json())
  .then(data => {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    listItem.setAttribute('data-id', data.id);
    listItem.appendChild(checkbox);
      listItem.appendChild(listText);
      listText.textContent = input.value;
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = 'Delete';
      ul.appendChild(listItem);
      deleteBtn.addEventListener('click', () => {
        ul.removeChild(listItem);
        deleteTask(receiveData, data.id);
      });
      checkbox.onchange = ()=>{
        if(checkbox.checked){
          listText.style.textDecoration = "line-through";
          listText.style.backgroundColor = "#7dc07d";
          listText.style.letterSpacing = 4 + "px";
          listText.style.fontWeight = "bold";
      }else{
        listText.style.textDecoration = "none";
        listText.style.backgroundColor = "transparent";
        listText.style.letterSpacing = 1 + "px";
        listText.style.fontWeight = "normal";
      }
    }
      
      // STYLING
      ul.style.listStyleType = "none"
      deleteBtn.classList.add("btn", "btn-secondary", "btn-sm")
    input.value = '';
    input.focus();
  });
}
function deleteTask(url,id){
  let deleteUrl = url + "/" + id;
  fetch(deleteUrl,{
    method: "DELETE"
  })
}
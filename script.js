const ul = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');
      const form = document.querySelector('form');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let myItem = input.value;
        const checkbox = document.createElement('input');
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const deleteBtn = document.createElement('button');
        checkbox.setAttribute("type", "checkbox");
        listItem.appendChild(checkbox)
        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';
        ul.appendChild(listItem);

        deleteBtn.addEventListener('click', () => {
          ul.removeChild(listItem);
        })

        input.value = '';
        input.focus();

        checkbox.onclick = function (){
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
      })
      
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const infoBox = document.querySelector(".infobox");
var completedTasks = document.querySelector(".counter");
var taskCounter = 0;
completedTasks.textContent = taskCounter;
completedTasks.style.color = "red";
completedTasks.style.fontSize = `${24}px`;
var clearBtn = document.querySelector(".clearBtn");
// clearBtn.style.display = "none";
// clearBtn.style.display = "block";
form.addEventListener('submit', (e) => {
	e.preventDefault();
	let myItem = input.value;
	const checkbox = document.createElement('input');
	const listItem = document.createElement('li');
	const listText = document.createElement('span');
	const deleteBtn = document.createElement('button');
	if (myItem !== "") {
		checkbox.setAttribute("type", "checkbox");
		listItem.appendChild(checkbox);
		listItem.appendChild(listText);
		listText.textContent = myItem;
		listItem.appendChild(deleteBtn);
		deleteBtn.textContent = 'Delete';
        ul.appendChild(listItem);
        
		deleteBtn.addEventListener('click', () => {
		if (checkbox.checked) {
            taskCounter--;
        };
		ul.removeChild(listItem);
		completedTasks.textContent = taskCounter;
		input.value = '';
		input.focus();
		checkbox.onchange = function() {
			if (checkbox.checked) {
				listText.style.textDecoration = "line-through";
				listText.style.backgroundColor = "#7dc07d";
				listText.style.letterSpacing = 4 + "px";
				listText.style.fontWeight = "bold";
				taskCounter++;
				completedTasks.textContent = taskCounter;
				completedTasks.style.color = "green";
			} else {
				listText.style.textDecoration = "none";
				listText.style.backgroundColor = "transparent";
				listText.style.letterSpacing = 1 + "px";
				listText.style.fontWeight = "normal";
				taskCounter--;
                completedTasks.textContent = taskCounter;
            };
		};
    };  
});
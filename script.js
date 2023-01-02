const input = document.querySelector('.input');
const buttonAdd = document.querySelector('#buttonAdd');
const tasksContainer = document.querySelector('.tasks-container');
const buttonClearAll = document.querySelector('#clearAll');
const buttonsClear = document.querySelectorAll('.buttonClear');


buttonAdd.addEventListener('click', () => {
    if(input.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'));
        if (localItems === null) {
            taskList = [];
        }
        else {
            taskList = localItems;
        }
        taskList.push(input.value);
        localStorage.setItem('localItem', JSON.stringify(taskList));

    }

    input.value = '';
    input.placeholder = 'Enter your task...';
    showItem();

});

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if(localItems === null) {
        taskList = [];
    }
    else {
        taskList = localItems;
    }

    let html = '';

    taskList.forEach((data, index) => {
        html+= `<div class="task-container">
            <p>${data}</p>
            <button class="buttonClear" onClick="deleteItem(${index})"><img src="no.webp" alt=""></button>
        </div>`;

    });

    tasksContainer.innerHTML = html;
} 

showItem();



function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem();
}

buttonClearAll.addEventListener('click', () => {
    localStorage.clear();
    tasksContainer.innerHTML = "";
})























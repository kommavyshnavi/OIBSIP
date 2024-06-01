document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    addTask(taskText);
    document.getElementById('new-task').value = '';
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            document.getElementById('completed-tasks').appendChild(li);
            completeButton.style.display = 'none';
            moveBackButton.style.display = 'inline-block';
        } else {
            document.getElementById('pending-tasks').appendChild(li);
            completeButton.style.display = 'inline-block';
            moveBackButton.style.display = 'none';
        }
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', function() {
        const newTaskText = prompt('Edit your task', taskText);
        if (newTaskText !== null && newTaskText !== '') {
            li.firstChild.textContent = newTaskText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('remove');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    const moveBackButton = document.createElement('button');
    moveBackButton.textContent = 'Move Back';
    moveBackButton.classList.add('move-back');
    moveBackButton.style.display = 'none';
    moveBackButton.addEventListener('click', function() {
        li.classList.remove('completed');
        document.getElementById('pending-tasks').appendChild(li);
        completeButton.style.display = 'inline-block';
        moveBackButton.style.display = 'none';
    });

    buttons.appendChild(completeButton);
    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);
    buttons.appendChild(moveBackButton);
    li.appendChild(buttons);

    document.getElementById('pending-tasks').appendChild(li);
}

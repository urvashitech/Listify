let taskInput = document.getElementById('taskInput')
let addInput = document.getElementById('addTaskBtn')
let taskList = document.getElementById('taskList')

addInput.addEventListener('click', function() {
    // Get and trim the input value
    let taskTest = taskInput.value.trim();

    if (taskTest === '') {
        alert('Enter a Task First');
        return;
    }

    // Create a new list item and add it to the task list
    /*let listItem = document.createElement('li');
    listItem.textContent = taskTest;*/ // Set the task text
    taskList.appendChild(listItem); // Add the task to the list

    // Clear the input field
    taskInput.value = '';
});

// Get the container where the card will be added
let container = document.body; // You can target a specific element instead of body

// Create the card element
let card = document.createElement('div');
card.className = 'card';
card.id = 'taskList';
card.style.width = '33rem';
card.style.marginLeft = '30rem';
card.style.marginRight = '4rem';
card.style.marginTop = '1rem';

// Create the card body
let cardBody = document.createElement('div');
cardBody.className = 'card-body';

// Create the card title
let cardTitle = document.createElement('h5');
cardTitle.className = 'card-title';
cardTitle.textContent = 'Your Tasks';

// Create the input group
let inputGroup = document.createElement('div');
inputGroup.className = 'input-group mb-3';

// Create the paragraph
let paragraph = document.createElement('p');
paragraph.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus perspiciatis tempora quasi error esse officiis fugiat? Consequuntur autem at animi? Veritatis, est at ratione qui et provident atque dolore!';

// Create the button
let deleteButton = document.createElement('button');
deleteButton.className = 'btn btn-danger rounded-pill';
deleteButton.id = 'addTaskBtn';
deleteButton.textContent = 'Delete Task ×';

// Append elements to construct the card
inputGroup.appendChild(paragraph);
inputGroup.appendChild(deleteButton);
cardBody.appendChild(cardTitle);
cardBody.appendChild(inputGroup);
card.appendChild(cardBody);

// Append the card to the container
container.appendChild(card);






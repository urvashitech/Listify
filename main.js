// Get the input, button, and dynamically created task list
let taskInput = document.getElementById('taskInput'); // This will come from the user input
let addInput = document.getElementById('addTaskBtn');
let container = document.body; // This is the main container

// Create the card dynamically
let card = document.createElement('div');
card.className = 'card';
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

// Create a container for the tasks
let taskList = document.createElement('ul'); // A list to hold tasks
taskList.className = 'list-group'; // Bootstrap class for styled lists

// Create the input group for the example description (without the Lorem ipsum)
let inputGroup = document.createElement('div');
inputGroup.className = 'input-group mb-3';

// Add the button to add tasks
let addButton = document.createElement('button');
addButton.className = 'btn btn-danger'; // Button for adding tasks
addButton.textContent = 'Add Task';

// Append elements to construct the card
cardBody.appendChild(cardTitle);
cardBody.appendChild(taskList); // Add the task list to the card
cardBody.appendChild(inputGroup);
card.appendChild(cardBody);
container.appendChild(card);

// Add event listener to add tasks
addInput.addEventListener('click', function () {
  // Get and trim the input value
  let taskTest = taskInput.value.trim();

  if (taskTest === '') {
    alert('Enter a Task First');
    return;
  }

  // Create a new list item and add it to the task list
  let listItem = document.createElement('li');
  listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  listItem.textContent = taskTest;

  // Create a delete button for the list item
  let taskDeleteBtn = document.createElement('button');
  taskDeleteBtn.className = 'btn btn-sm btn-danger';
  taskDeleteBtn.textContent = '×';

  // Add delete functionality to the task delete button
  taskDeleteBtn.addEventListener('click', function () {
    taskList.removeChild(listItem);
  });

  // Append the delete button to the list item
  listItem.appendChild(taskDeleteBtn);

  // Add the new task to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = '';
});

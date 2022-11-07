import { projects } from "../index";
import { formatDate } from "./format-date"
import { populateSelection } from "./populate-selection";

// Edit a todo item
export function editTodo (todo) {  
  // Find project object that todo is associated with
  const projectTitle = todo.target.parentNode.parentNode.children[2].children[1].innerText;
  let project;
  for (let projectIndex in projects) {
    if (projects[projectIndex].title == projectTitle) {
      project = projects[projectIndex];
    }
  }

  // Find todo object within the associated projects todo list
  const todoTitle = todo.target.parentNode.parentNode.children[0].innerText;
  let todoObject;
  for (let todoIndex in project.todoList) {
    if (project.todoList[todoIndex].title == todoTitle) {
      todoObject = project.todoList[todoIndex];
    }
  }

  // Delete existing info elements
  const todoContainer = todo.target.parentNode.parentNode;
  todoContainer.children[0].remove();
  todoContainer.children[0].children[1].remove();
  todoContainer.children[2].children[1].remove();

  // Add editable title field
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.autocomplete = "off";
  titleInput.placeholder = todoObject.title;
  todoContainer.insertBefore(titleInput, todoContainer.children[0]);

  // Add editable date field
  const dateInput = document.createElement("input");
  dateInput.type = "text";
  dateInput.name = "dueDate";
  dateInput.placeholder = todoObject.dueDate;
  dateInput.addEventListener("focus", () => dateInput.type='date');
  dateInput.addEventListener("blur", () => { if (dateInput.value == '') { dateInput.type = 'text'; }});
  todoContainer.children[1].appendChild(dateInput);

  // Add editable priority field
  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";
  todoContainer.children[3].insertBefore(priorityInput, todoContainer.querySelector(".checkbox"));
  const lowValue = document.createElement("option");
  lowValue.value = "Low";
  lowValue.innerText = "Low";
  priorityInput.appendChild(lowValue);
  const mediumValue = document.createElement("option");
  mediumValue.value = "Medium";
  mediumValue.innerText = "Medium";
  priorityInput.appendChild(mediumValue);
  const highValue = document.createElement("option");
  highValue.value = "High";
  highValue.innerText = "High";
  priorityInput.appendChild(highValue);
  const valueArray = [lowValue, mediumValue, highValue]
  for (let priorityValue of valueArray) {
    if (priorityValue.value == todoObject.priority) {
      priorityValue.selected = "true";
    }
  }

  // Create save and a cancel buttons
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttonsContainer");
  todoContainer.appendChild(buttonsContainer);
  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.addEventListener("click", () => {
    if (titleInput.value == '') {
      titleInput.value = todoObject.title;
    }
    if (dateInput.value == '') {
      dateInput.value = todoObject.dueDate;
    }
    todoObject.title = titleInput.value;
    todoObject.dueDate = formatDate(dateInput.value);
    todoObject.priority = priorityInput.value;
    populateSelection();
  });
  buttonsContainer.appendChild(saveButton);
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => populateSelection());
  buttonsContainer.appendChild(cancelButton);

  // Turn off all edit button event listeners until the current todo edit is saved or cancelled
  const edits = document.querySelectorAll(".edit");
  for (let edit of edits) {
    edit.removeEventListener("click", editTodo);
  }
}
import { projects } from "../index";
import { populateSelection } from "./populate-selection";
import { todoFactory } from "./todo-factory";
import { formatDate } from "./format-date";

export function newTodo () {
  // Assign user input to variables
  let title = document.querySelector("[name=title]");
  let dueDate = document.querySelector("[name=dueDate]");
  let priority = Array.from(document.querySelectorAll("[name=priority]"));
  for (let node in priority) {
    if (priority[node].checked == true) {
      priority = priority[node].value;
    }
  }

  // If title or due date is blank don't let the user add the todo
  if (title.value == "" || dueDate.value == "") {
    return;
  }
  
  // Find currently selected project for todo to be added to
  let projectsList = Array.from(document.querySelector(".projectsContainer").childNodes);
  let projectTitle;
  let selectedProject;
  for (let nodeIndex in projectsList) {
    if (projectsList[nodeIndex].firstChild.classList.contains("selected")) {
      projectTitle = projectsList[nodeIndex].firstChild.innerText;
    }
  }
  for (let projectIndex in projects) {
    if (projects[projectIndex].title == projectTitle) {
      selectedProject = projects[projectIndex];
    }
  }

  // Use todo factory to create new todo
  let formattedDueDate = formatDate(dueDate.value);
  let newTodo = todoFactory(title.value, formattedDueDate, priority, selectedProject.title);

  // Add todo to appropriate project
  selectedProject.todoList.push(newTodo);

  // Update local storage
  localStorage.setItem('projects', JSON.stringify(projects));

  // Update content to display new todo
  populateSelection();

  // Close the modal and reset the form fields
  document.querySelector(".modal").style.display = "none";
  title.value = "";
  dueDate.value = "";
  document.querySelector("[value=Low]").checked = true;
}

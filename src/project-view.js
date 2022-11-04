import { projects } from "./index";
import { displayTodo } from "./display-todo";
import addSVG from './images/add.svg';
import deleteSVG from './images/delete.svg';
import { deleteProject } from './delete-project';


// Display all todos for the currently selected project
export function projectView (selected) {  
  let selectedProjectIndex;
  
  for (let projectIndex in projects) {
    if (projects[projectIndex].title == selected.innerText) {
      selectedProjectIndex = projectIndex;
    }
  }

  // Display all todo items in content area
  for (let todo of projects[selectedProjectIndex].todoList) {
    displayTodo(todo);
  }

  // Display a new todo button
  const addImg = document.createElement("img");
  addImg.setAttribute("src", addSVG);
  addImg.setAttribute("alt", "Add Todo");
  addImg.classList.add("add");

  // Delete any existing project delete button to avoid double ups
  const projectsList = Array.from(document.querySelector(".projectsContainer").childNodes);
  for (let projectIndex in projectsList) {
    let projectNodes = Array.from(projectsList[projectIndex].children);
    for (let nodeIndex in projectNodes) {
      if (projectNodes[nodeIndex].classList.contains("delete")) {
        projectNodes[nodeIndex].remove();
      }
    }
  }

  // Display a delete button next to project name
  let deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", deleteSVG);
  deleteIcon.setAttribute("alt", "delete");
  deleteIcon.classList.add("delete");
  deleteIcon.addEventListener("click", deleteProject);
  selected.parentNode.appendChild(deleteIcon);

  // addImg.addEventListener("click", newTodo);
  document.querySelector(".content").appendChild(addImg);
  
  // Add selected class to selection
  selected.classList.add("selected");
}
import { projects } from "../index";
import { displayTodo } from "./display-todo";
import addSVG from '../images/add.svg';
import deleteSVG from '../images/delete.svg';
import { deleteProject } from './delete-project';
import { displayModal } from "./display-modal";
import { removeProjectDelete } from "./remove-project-delete";


// Display all todos for the currently selected project
export function projectView (selected) {  
  // Find the index of the project that is selected in the navbar
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
  addImg.classList.add("newTodo");
  addImg.addEventListener("click", displayModal);
  document.querySelector(".content").appendChild(addImg);

  // Delete any existing project delete button to avoid double ups
  removeProjectDelete();

  // Display a delete button next to project name
  let deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", deleteSVG);
  deleteIcon.setAttribute("alt", "delete");
  deleteIcon.classList.add("delete");
  deleteIcon.addEventListener("click", deleteProject);
  selected.parentNode.appendChild(deleteIcon);
  
  // Add selected class to selection
  selected.classList.add("selected");
}
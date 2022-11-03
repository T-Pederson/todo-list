import { projects } from "./index";
import { displayTodo } from "./display-todo";

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
  
  // Add selected class to Home
  selected.classList.add("selected");
}
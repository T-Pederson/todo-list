import { projects } from "../index";
import { populateSelection } from "./populate-selection";

// Delete todo from appropriate project
export function deleteTodo (todo) { 
  for (let project in projects) {
    if (projects[project].title == todo.project) {
      projects[project].todoList.splice(projects[project].todoList.indexOf(todo), 1);
    }
  }
  
  // Update local storage
  localStorage.setItem('projects', JSON.stringify(projects));

  populateSelection();
}
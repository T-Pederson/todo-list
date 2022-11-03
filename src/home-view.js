import { clearContent } from './clear-content';
import { displayTodo } from './display-todo';

export function populateHome (projects) {
  // Clear content area
  clearContent();

  // Display all todo items in content area
  for (let project of projects) {
    for (let todo of project.todoList) {
      displayTodo(todo);
    }
  }

  // Add selected class to Home
  document.querySelector(".home").classList.add("selected");
}
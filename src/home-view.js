import { displayTodo } from './display-todo';
import { projects } from './index';
import { removeProjectDelete } from './remove-project-delete';

export function homeView () {
  // Display all todo items in content area
  for (let project of projects) {
    for (let todo of project.todoList) {
      displayTodo(todo);
    }
  }

  // Remove any existing project delete button
  removeProjectDelete();

  // Add selected class to Home
  document.querySelector(".home").classList.add("selected");
}
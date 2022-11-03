import { displayTodo } from './display-todo';
import { projects } from './index';

export function homeView () {
  // Display all todo items in content area
  for (let project of projects) {
    for (let todo of project.todoList) {
      displayTodo(todo);
    }
  }

  // Add selected class to Home
  document.querySelector(".home").classList.add("selected");
}
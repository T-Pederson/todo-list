import { populateSelection } from "./populate-selection";
import { newTodo } from "./new-todo";

export function eventListeners() {
  document.querySelector(".home").addEventListener("click", populateSelection);
  document.querySelector(".week").addEventListener("click", populateSelection);
  document.querySelector(".month").addEventListener("click", populateSelection);
  document.querySelector(".addTodo").addEventListener("click", newTodo);
}
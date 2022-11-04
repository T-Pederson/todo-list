import checkboxEmptySVG from "./images/checkboxempty.svg";
import editSVG from "./images/edit.svg";
import deleteSVG from "./images/delete.svg"
import { changeCheckbox } from "./change-checkbox";
import { deleteTodo } from "./delete-todo";

const content = document.querySelector(".content");

export function displayTodo (todo) {
  // Generate todo container
  let todoNode = document.createElement("div");
  todoNode.classList.add("todo");
  todoNode.classList.add(todo.priority.toLowerCase());
  content.appendChild(todoNode);

  // Generate title
  let title = document.createElement("p");
  title.classList.add("title");
  title.innerText = todo.title;
  todoNode.appendChild(title);

  // Generate due date container
  let dueContainer = document.createElement("div");
  dueContainer.classList.add("dueContainer");
  todoNode.appendChild(dueContainer);

  // Generate Due: text
  let dueText = document.createElement("p");
  dueText.innerText = "Due: ";
  dueContainer.appendChild(dueText);

  // Generate due date
  let dueDate = document.createElement("p");
  dueDate.innerText = todo.dueDate;
  dueContainer.appendChild(dueDate);

  // Generate priority container
  let priorityContainer = document.createElement("div");
  priorityContainer.classList.add("priorityContainer");
  todoNode.appendChild(priorityContainer);

  // Generate Priority: text
  let priorityText = document.createElement("p");
  priorityText.innerText = "Priority: ";
  priorityContainer.appendChild(priorityText);

  // Generate priority
  let priority = document.createElement("p");
  priority.innerText = todo.priority;
  priorityContainer.appendChild(priority);

  // Generate checkbox empty and add logic for checking
  let checkboxIcon = document.createElement("img");
  checkboxIcon.setAttribute("src", checkboxEmptySVG);
  checkboxIcon.setAttribute("alt", "checkbox unchecked");
  checkboxIcon.classList.add("checkbox");
  priorityContainer.appendChild(checkboxIcon);
  checkboxIcon.addEventListener("click", changeCheckbox);

  // Generate edit icon
  let editIcon = document.createElement("img");
  editIcon.setAttribute("src", editSVG);
  editIcon.setAttribute("alt", "edit");
  editIcon.classList.add("edit");
  priorityContainer.appendChild(editIcon);

  // Generate delete icon
  let deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", deleteSVG);
  deleteIcon.setAttribute("alt", "delete");
  deleteIcon.classList.add("delete");
  deleteIcon.addEventListener("click", () => deleteTodo(todo));
  priorityContainer.appendChild(deleteIcon);
}
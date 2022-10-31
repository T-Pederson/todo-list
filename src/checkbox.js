import checkboxEmpty from "./images/checkboxempty.svg";
import checkboxChecked from "./images/checkboxchecked.svg";

export function checkbox (selected) {
  let todoClasses = selected.target.parentNode.parentNode.classList;

  // Logic to swap checked status on todo item
  if (Array.from(todoClasses).includes("complete")) {
    todoClasses.remove("complete");
    const newBox = document.createElement("img");
    newBox.setAttribute("src", checkboxEmpty);
    newBox.setAttribute("alt", "checkbox");
    newBox.classList.add("checkbox");
    selected.target.after(newBox);
    newBox.addEventListener("click", checkbox);
    selected.target.remove();
  } else {
    todoClasses.add("complete");
    const newBox = document.createElement("img");
    newBox.setAttribute("src", checkboxChecked);
    newBox.setAttribute("alt", "checkbox");
    newBox.classList.add("checkbox");
    selected.target.after(newBox);
    newBox.addEventListener("click", checkbox);
    selected.target.remove();
  };
}
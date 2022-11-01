import checkboxEmptySVG from "./images/checkboxempty.svg";
import checkboxCheckedSVG from "./images/checkboxchecked.svg";

export function changeCheckbox (selected) {
  let todoClasses = selected.target.parentNode.parentNode.classList;

  // Logic to swap checked status on todo item
  if (Array.from(todoClasses).includes("complete")) {
    todoClasses.remove("complete");
    const newBox = document.createElement("img");
    newBox.setAttribute("src", checkboxEmptySVG);
    newBox.setAttribute("alt", "checkbox unchecked");
    newBox.classList.add("checkbox");
    selected.target.after(newBox);
    newBox.addEventListener("click", changeCheckbox);
    selected.target.remove();
  } else {
    todoClasses.add("complete");
    const newBox = document.createElement("img");
    newBox.setAttribute("src", checkboxCheckedSVG);
    newBox.setAttribute("alt", "checkbox checked");
    newBox.classList.add("checkbox");
    selected.target.after(newBox);
    newBox.addEventListener("click", changeCheckbox);
    selected.target.remove();
  };
}
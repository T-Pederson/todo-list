import checklistSVG from "./images/checklist.svg";
import addSVG from "./images/add.svg";
import { newProject } from "./new-project";

export function loadSVGs () {
  const checklistImg = document.createElement("img");
  checklistImg.setAttribute("src", checklistSVG);
  checklistImg.setAttribute("alt", "checklist icon");
  checklistImg.classList.add("logo");
  document.querySelector(".header").insertBefore(checklistImg, document.querySelector("h1"));

  let addImg = document.createElement("img");
  addImg.setAttribute("src", addSVG);
  addImg.setAttribute("alt", "Add");
  addImg.classList.add("add");
  addImg.addEventListener("click", newProject);
  document.querySelector(".navbar").appendChild(addImg);
}
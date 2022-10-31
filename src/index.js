import './styles.css';
import checklistSVG from "./images/checklist.svg";
import addSVG from "./images/add.svg";

// Load svgs
const h1 = document.querySelector("h1");
const checklistImg = document.createElement("img");
checklistImg.setAttribute("src", checklistSVG);
checklistImg.setAttribute("alt", "checklist icon");
checklistImg.classList.add("logo");
document.querySelector(".header").insertBefore(checklistImg, h1);

let addImg = document.createElement("img");
addImg.setAttribute("src", addSVG);
addImg.setAttribute("alt", "Add");
addImg.classList.add("add");
document.querySelector(".projectsContainer").appendChild(addImg);

addImg = document.createElement("img");
addImg.setAttribute("src", addSVG);
addImg.setAttribute("alt", "Add");
addImg.classList.add("add");
document.querySelector(".content").appendChild(addImg);
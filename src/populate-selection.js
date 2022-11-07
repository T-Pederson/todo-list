import { clearContent } from "./clear-content";
import { homeView } from "./home-view";
import { projectView } from "./project-view";
import { weekView } from "./week-view";
import { monthView } from "./month-view";

// Generate list of todo's based on current navbar selection
export function populateSelection (selection) {
  clearContent();
  
  const navbar = document.querySelector(".navbar");
  const projectsList = document.querySelector(".projectsContainer");
  const navbarArray = Array.from(navbar.children);
  const projectsArray = Array.from(projectsList.children);

  // Find currently selected option in the event that a project or todo is deleted
  if (selection == undefined) {
    for (let item in navbarArray) {
      if (navbarArray[item].classList.contains("selected")) {
        selection = navbarArray[item];
      }
    }
    for (let item in projectsArray) {
      if (projectsArray[item].firstChild.classList.contains("selected")) {
        selection = projectsArray[item].firstChild;
      }
    }
  } else if (selection.target != undefined) {
    selection = selection.target;
  }

  // Remove selected status from previous selection
  for (let item in navbarArray) {
    if (navbarArray[item].classList.contains("selected")) {
      navbarArray[item].classList.remove("selected");
    }
  }
  for (let item in projectsArray) {
    if (projectsArray[item].firstChild.classList.contains("selected")) {
      projectsArray[item].firstChild.classList.remove("selected");
    }
  }

  // Display the appropriate view based on the selection
  if (selection.innerText == 'Home') {
    homeView();
  } else if (selection.innerText == 'Week') {
    weekView();
  } else if (selection.innerText == 'Month') {
    monthView();
  } else {
    projectView(selection);
  }
}
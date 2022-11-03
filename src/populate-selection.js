import { clearContent } from "./clear-content";
import { homeView } from "./home-view";
import { projectView } from "./project-view";

// Generate list of todo's based on current navbar selection
export function populateSelection (selection) {
  clearContent();
  
  const navbar = document.querySelector(".navbar");
  const projectsList = document.querySelector(".projectsContainer");
  const navbarArray = Array.from(navbar.children);
  const projectsArray = Array.from(projectsList.children);
  selection = selection.target;

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

  if (selection.innerText == 'Home') {
    homeView();
  } else if (selection.innerText == 'Week') {
    // display week view
  } else if (selection.innerText == 'Month') {
    // display month view
  } else {
    projectView(selection);
  }
}
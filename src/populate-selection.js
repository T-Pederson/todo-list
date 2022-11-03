import { clearContent } from "./clear-content";
import { populateHome } from "./home-view";

// Generate list of todo's based on current navbar selection
export function populateSelection () {
  clearContent();
  
  const navbar = document.querySelector(".navbar");
  const projectsList = document.querySelector(".projectsContainer");
  const navbarArray = Array.from(navbar.children);
  const projectsArray = Array.from(projectsList.children);
  let selection;

  for (let item in navbarArray) {
    if (navbarArray[item].classList.contains("selected")) {
      selection = navbarArray[item].innerText;
    }
  }

  for (let item in projectsArray) {
    if (projectsArray[item].classList.contains("selected")) {
      selection = projectsArray[item].innerText;
    }
  }

  if (selection == 'Home') {
    populateHome();
  } else if (selection == 'Week') {
    // display week view
  } else if (selection == 'Month') {
    // display month view
  } else {
    // display selected project view
  }
}
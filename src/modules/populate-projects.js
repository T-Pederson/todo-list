import { clearProjects } from "./clear-projects";
import { projects } from "../index";
import { populateSelection } from "./populate-selection";

// Refresh the list of projects in the navbar
export function populateProjects () {
  clearProjects();
  
  const projectsContainer = document.querySelector(".projectsContainer");
  for (let project of projects) {
    let projectNode = document.createElement("div");
    projectNode.classList.add("project");
    projectsContainer.appendChild(projectNode);

    let projectName = document.createElement("p");
    projectName.innerText = project.title;
    projectName.addEventListener("click", populateSelection);
    projectNode.appendChild(projectName);
  }
}
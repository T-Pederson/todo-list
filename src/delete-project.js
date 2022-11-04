import { populateProjects } from "./populate-projects";
import { projects } from "./index";
import { populateSelection } from "./populate-selection";

export function deleteProject (project) {
  
  // Delete project from list of projects
  for (let projectIndex in projects) {
    if (projects[projectIndex].title == project.target.previousSibling.innerText) {
      projects.splice(projectIndex, 1);
    }
  }

  // Update projects list in navbar
  populateSelection(document.querySelector(".home"));
  populateProjects();
}


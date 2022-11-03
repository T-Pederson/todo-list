import { populateProjects } from "./populate-projects";
import { projects } from "./index";
import { populateSelection } from "./populate-selection";

export function deleteProject (project) {
  
  // Delete project from list of projects
  for (let projectIndex in projects) {
    if (projects[projectIndex].title == project.innerText) {
      projects.splice(projectIndex, 1);
    }
  }

  // Update projects list in navbar
  populateProjects(projects);
  populateSelection();
}


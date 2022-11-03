import { clearProjects } from "./clear-projects";
import { populateHome } from "./home-view";
import { populateProjects } from "./populate-projects";

export function deleteProject (project, projects) {
  
  // Delete project from list of projects
  for (let projectIndex in projects) {
    if (projects[projectIndex].title == project.innerText) {
      projects.splice(projectIndex, 1);
    }
  }

  // Update projects list in navbar
  clearProjects();
  populateProjects(projects);
  populateHome(projects);
}


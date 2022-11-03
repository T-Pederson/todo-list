import { populateProjects } from "./populate-projects";
import { projectFactory } from "./project-factory";
import { projects } from "./index";

export function newProject () {
  const projectsList = document.querySelector(".projectsContainer");

  // Create a new empty form field to input project title in
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  projectsList.appendChild(titleInput);
  titleInput.focus();

  // Use project factory to create new project, add it to the projects array, and update the navbar
  titleInput.addEventListener("keydown", (key) => {
    if (key.code == 'Enter') {
      const newProject = projectFactory(titleInput.value, []);
      projects.push(newProject);
      populateProjects();
    }
  });
}

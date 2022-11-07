import { populateProjects } from "./populate-projects";
import { projectFactory } from "./project-factory";
import { projects } from "./index";

export function newProject () {
  const projectsList = document.querySelector(".projectsContainer");
  
  // Create a list of existing project names
  let projectsArray = [];
  const children = Array.from(projectsList.children);
  for (let index in children) {
    projectsArray.push(children[index].innerText);
  }

  // Create a new empty form field to input project title in
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.id = "projectName";
  projectsList.appendChild(titleInput);
  titleInput.focus();

  // Use project factory to create new project, add it to the projects array, and update the navbar
  // Don't allow user to use a blank or already existing title
  titleInput.addEventListener("blur", () => {
    let projectTitle = titleInput.value;
    if (projectTitle != '' && !projectsArray.includes(projectTitle)) {
      const newProject = projectFactory(projectTitle, []);
      projects.push(newProject);
      populateProjects();
    }
  });
}

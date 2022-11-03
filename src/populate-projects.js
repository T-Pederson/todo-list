import { clearProjects } from "./clear-projects";
import { deleteProject } from "./delete-project";
import deleteSVG from "./images/delete.svg";
import { projects } from "./index";

export function populateProjects () {
  clearProjects();
  
  const projectsContainer = document.querySelector(".projectsContainer");
  for (let project of projects) {
    let projectNode = document.createElement("div");
    projectNode.classList.add("project");
    projectsContainer.appendChild(projectNode);
    let projectName = document.createElement("p");
    projectName.innerText = project.title;
    projectNode.appendChild(projectName);
    let deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("src", deleteSVG);
    deleteIcon.setAttribute("alt", "delete");
    deleteIcon.classList.add("delete");
    deleteIcon.addEventListener("click", () => deleteProject(projectNode));
    projectNode.appendChild(deleteIcon);
  }
}
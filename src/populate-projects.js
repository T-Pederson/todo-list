export function populateProjects (projects) {
  const projectsContainer = document.querySelector(".projectsContainer");
  for (let project of projects) {
    let projectNode = document.createElement("p");
    projectNode.classList.add("project");
    projectNode.id = project.title;
    projectNode.innerText = project.title;
    projectsContainer.appendChild(projectNode);
  }
}
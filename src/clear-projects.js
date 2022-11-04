// Clear list of projects in navbar
export function clearProjects () {
  const projects = document.querySelector(".projectsContainer");
  while (projects.firstChild) {
    projects.removeChild(projects.firstChild);
  }
}
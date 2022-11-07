export function removeProjectDelete () {
  // Delete any existing project delete button to avoid double ups
  const projectsList = Array.from(document.querySelector(".projectsContainer").childNodes);
  for (let projectIndex in projectsList) {
    let projectNodes = Array.from(projectsList[projectIndex].children);
    for (let nodeIndex in projectNodes) {
      if (projectNodes[nodeIndex].classList.contains("delete")) {
        projectNodes[nodeIndex].remove();
      }
    }
  }
}
export function clearContent () {
  const content = document.querySelector(".content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
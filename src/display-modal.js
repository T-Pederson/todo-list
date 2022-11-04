export function displayModal() {
  // Display modal
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
  
  // Make close button work
  document.querySelector(".close").onclick = () => modal.style.display = "none";
  
  // Make modal close if you click outside of it
  window.onclick = (event) => { 
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
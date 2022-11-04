import { removeProjectDelete } from "./remove-project-delete";

// Display all todos for the next 30 days
export function monthView () {
    // Add selected class to Month
    document.querySelector(".month").classList.add("selected");

    // Remove any existing project delete button
    removeProjectDelete();
}
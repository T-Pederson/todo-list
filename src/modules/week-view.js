import { displayTodo } from "./display-todo";
import { projects } from "../index";
import { removeProjectDelete } from "./remove-project-delete";
import compareAsc from "date-fns/compareAsc";

export function weekView () {
    // Display all todo items in content area for next 7 days
    let today = new Date();
    today.setHours(0,0,0,0);
    let sevenDaysAhead = new Date(today);
    sevenDaysAhead.setDate(sevenDaysAhead.getDate() + 6);
    for (let project of projects) {
        for (let todo of project.todoList) {
            const dueDate = new Date(todo.dueDate)
            const compareToday = compareAsc(today, dueDate);
            const compareSeven = compareAsc(sevenDaysAhead, dueDate);
            if ((compareToday == 0 || compareToday == -1) && (compareSeven == 0 || compareSeven == 1)) {
                displayTodo(todo);
            }
        }
    }

    // Add selected class to Week
    document.querySelector(".week").classList.add("selected");

    // Remove any existing project delete button
    removeProjectDelete();
}
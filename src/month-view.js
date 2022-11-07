import { displayTodo } from "./display-todo";
import { projects } from "./index";
import { removeProjectDelete } from "./remove-project-delete";
import compareAsc from "date-fns/compareAsc";

// Display all todos for the next 30 days
export function monthView () {
    // Display all todo items in content area for next 7 days
    let today = new Date();
    today.setHours(0,0,0,0);
    let thirtyDaysAhead = new Date(today);
    thirtyDaysAhead.setDate(thirtyDaysAhead.getDate() + 29);
    for (let project of projects) {
        for (let todo of project.todoList) {
            const dueDate = new Date(todo.dueDate)
            const compareToday = compareAsc(today, dueDate);
            const compareThirty = compareAsc(thirtyDaysAhead, dueDate);
            if ((compareToday == 0 || compareToday == -1) && (compareThirty == 0 || compareThirty == 1)) {
                displayTodo(todo);
            }
        }
    }
    
    // Add selected class to Month
    document.querySelector(".month").classList.add("selected");

    // Remove any existing project delete button
    removeProjectDelete();
}
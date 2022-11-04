import './styles.css';
import { loadSVGs } from './load-SVGs';
import { todoFactory } from './todo-factory';
import { projectFactory } from './project-factory';
import { populateProjects } from './populate-projects';
import { populateSelection } from './populate-selection';
import { newTodo } from './new-todo';

export let projects = [];

// if first time loading page
  // generate example project with example todos and add to projects list
  let exampleProject = projectFactory ('Example', [
    todoFactory("Take out the garbage", "11/01/22", "Low", "Example"),
    todoFactory("Grocery shopping", "11/02/22", "Medium", "Example"),
    todoFactory("Take a shower", "11/01/22", "High", "Example")
  ]);
  projects.push(exampleProject);
  let exampleProject2 = projectFactory ('Example 2', [
    todoFactory("Fix the sink", "11/01/22", "Low", "Example 2"),
    todoFactory("Take kids to school", "11/02/22", "Medium", "Example 2"),
    todoFactory("Brush teeth", "11/01/22", "High", "Example 2")
  ]);
  projects.push(exampleProject2);
// else
  // generate projects from storage
    // generate todos for each project in storage
  // populate home page with list of projects and new project button
  // add event listeners to week, month, each project, and new project buttons

  // Generate list of projects in navbar
  populateProjects();

  // Generate header logo and new project icon in navbar
  loadSVGs();

  // Generate the initial list of todos using home view as default
  populateSelection();

  // Add event listeners to Home, Week, and Month (each project will create it's own event listener when created in the navbar)
  document.querySelector(".home").addEventListener("click", populateSelection);
  document.querySelector(".week").addEventListener("click", populateSelection);
  document.querySelector(".month").addEventListener("click", populateSelection);

  // Add event listener to add todo button in modal
  document.querySelector(".addTodo").addEventListener("click", newTodo);
import './styles.css';
import { loadSVGs } from './load-SVGs';
import { todoFactory } from './todo-factory';
import { projectFactory } from './project-factory';
import { populateHome } from './home';
import { populateProjects } from './populate-projects';

let projects = [];

// if first time loading page
  // generate example project with example todos and add to projects list
  let exampleProject = projectFactory ('Example', [
    todoFactory("Take out the garbage", "11/01/22", "Low"),
    todoFactory("Grocery shopping", "11/02/22", "Medium"),
    todoFactory("Take a shower", "11/01/22", "High")
  ]);
  projects.push(exampleProject);
// else
  // generate projects from storage
    // generate todos for each project in storage
  // populate home page with list of projects and new project button
  // add event listeners to week, month, each project, and new project buttons

  // Generate list of projects in navbar
  populateProjects(projects);

  // Generate header logo and new project icon in navbar
  loadSVGs();

  // Make home load by default when first loading page
  populateHome(projects);

  // Add event listeners to Home, Week, Month, and each project
  document.querySelector(".home").addEventListener("click", () => populateHome(projects));
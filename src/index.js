import './styles.css';
import { loadSVGs } from './modules/load-SVGs';
import { populateProjects } from './modules/populate-projects';
import { populateSelection } from './modules/populate-selection';
import { examples } from './modules/examples';
import { eventListeners } from './modules/event-listeners';

export let projects = [];

// if no local storage, generate example projects & todos
  examples();
// else
  // generate projects from storage


  // Generate list of projects in navbar
  populateProjects();

  // Generate header logo and new project icon in navbar
  loadSVGs();

  // Generate the initial list of todos using home view as default
  populateSelection();

  // Add event listeners to Home, Week, Month and Add Todo button in modal
  eventListeners();
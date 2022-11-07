import { todoFactory } from './todo-factory';
import { projectFactory } from './project-factory';
import { projects } from '../index';

export function examples() {
  let exampleProject = projectFactory ('Example', [
    todoFactory("Take out the garbage", "11/01/22", "Low", "Example"),
    todoFactory("Grocery shopping", "11/06/22", "Medium", "Example"),
    todoFactory("Take a shower", "11/08/22", "High", "Example")
  ]);
  projects.push(exampleProject);
}
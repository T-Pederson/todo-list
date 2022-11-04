import { todoFactory } from './todo-factory';
import { projectFactory } from './project-factory';
import { projects } from './index';

export function examples() {
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
}
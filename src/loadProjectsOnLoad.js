import Project from './project.js';
import { Projects } from './index.js';

export default function() {
    // gets all projects and recreates the Project instancies
    for(let i = 0; i < localStorage.length; i++) {
        const value = JSON.parse(localStorage.getItem(`project${i}`));
        const project = Project(value.name, value.todos);
        Projects.pushStorage(project);
        addToDom(project);
    }
}

function addToDom(p) {
    const ul = document.getElementById('projectList');
    const newLi = document.createElement('li');
    newLi.id = p.getId();
    newLi.innerHTML = p.getName();
    ul.appendChild(newLi);   
}
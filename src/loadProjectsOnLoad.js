import Project from './project.js';
import { Projects } from './index.js';

export default function() {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        const project = Project(value.name, value.todos);
        Projects.pushStorage(project);
        addToDom(project);
    }
}

function addToDom(p) {
    const ul = document.getElementById('projectList');
    const newLi = document.createElement('li');
    newLi.id = p.getName().replace(/\s/g, "");
    newLi.innerHTML = p.getName();
    ul.appendChild(newLi);   
}
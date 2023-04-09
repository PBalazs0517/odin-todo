import Project from './projets.js';

export default function() {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        const project = Project(value.name, value.todos);
        const ul = document.getElementById('projectList');
        const newLi = document.createElement('li');
        newLi.id = project.getName();
        newLi.innerHTML = project.getName();
        ul.appendChild(newLi);    
    }
}
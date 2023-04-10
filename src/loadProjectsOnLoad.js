import Project from './project.js';
import { Projects } from './index.js';
import { activeProject } from './projectSelector.js';
import { addTodoBtn, active } from './addTodo.js';
import loadTodos from './loadTodos.js';

export default function() {
    // gets all projects and recreates the Project instances
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
    newLi.addEventListener('click', () => {
        let mainCont = document.getElementById('mainCont');
        hideUI(mainCont);
        activeProject = Projects.getStorage()[p.getId()]; 
        let title = document.createElement('h1');
        title.classList.add('title');
        title.innerHTML = activeProject.getName();
        mainCont.appendChild(title);
        addTodoBtn();
        loadTodos();
    })
}

function hideUI(cont) {
    while(cont.firstChild) {
        cont.removeChild(cont.lastChild);
    }
    active = false;
}
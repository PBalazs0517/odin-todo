import Project from "./project";
import { Projects } from "./index";
import { activeProject } from './projectSelector.js';
import { addTodoBtn, active } from './addTodo.js';
import loadTodos from "./loadTodos";

export default function addProject() {
    // clears the interface 
    let mainCont = document.getElementById('mainCont');
    while(mainCont.firstChild) {
        mainCont.removeChild(mainCont.lastChild);
    }
    // creates the interface where the user makes new todos 
    let div = document.createElement('div');
    div.id = 'projectAddCont';
    mainCont.appendChild(div);
    let projectInput = document.createElement('input');
    projectInput.id = 'projectInput';
    projectInput.placeholder = 'Project\'s name';
    div.appendChild(projectInput);
    let addBtn = document.createElement('button');
    addBtn.id = 'addBtn';
    addBtn.classList.add('addBtn');
    addBtn.innerHTML = 'Add';
    div.appendChild(addBtn);
    let cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancelBtn';
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.innerHTML = 'Cancel';
    div.appendChild(cancelBtn);

    //buttons functionalities
    addBtn.addEventListener('click', addBtnLogic);
    cancelBtn.addEventListener('click', cancelBtnLogic);
    //QoL things
    projectInput.focus();
};

function addBtnLogic() {
    let mainCont = document.getElementById('mainCont');
    // makes sure that there are no mathcing or empty names
    const existingProjects = Projects.getStorage();
    const projectNames = existingProjects.map(p => p.getName());
    if(projectNames.some(name => name == document.getElementById('projectInput').value)) {
        alert('The names have to be unique');
        document.getElementById('projectInput').innerHTML = "";
    } else if ((document.getElementById('projectInput').value).replace(/\s/g, "") == "") {
        alert('You must add a name to your project');
        document.getElementById('projectInput').innerHTML = "";
    } else {
        // creates a new Project insatnce based on inputs
        const newProject = Project(document.getElementById('projectInput').value);
        // stores the information that are needed to recreat the instance when the pages loaded in again
        localStorage.setItem(`project${localStorage.length}`, JSON.stringify({name: newProject.getName(), id: newProject.getId(), todos: newProject.getToDos()}));
        // stores the insance so it is accesable later on
        Projects.pushStorage(newProject);
        // creates what is gona be displayed
        const ul = document.getElementById('projectList');
        const newLi = document.createElement('li');
        newLi.id = newProject.getId();
        newLi.innerHTML = newProject.getName();
        ul.appendChild(newLi);
        newLi.addEventListener('click', () => {
            let mainCont = document.getElementById('mainCont');
            hideUI(mainCont)
            // sets the active project so it knows which project to add the todos
            activeProject = Projects.getStorage()[newProject.getId()]; 
            // generates the output of the projects
            let title = document.createElement('h1');
            title.classList.add('title');
            title.innerHTML = activeProject.getName();
            mainCont.appendChild(title);
            addTodoBtn();
            loadTodos();
        });
    
        hideUI(mainCont);
    }; 

};

function cancelBtnLogic() {
    hideUI(mainCont);
}

function hideUI(cont) {
    while(cont.firstChild) {
        cont.removeChild(cont.lastChild);
    }
    // sets the vale of active so it knows when can it generate a new add todo interface
    active = false;
}
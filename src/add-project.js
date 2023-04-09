import Project from "./project";
import { Projects } from "./index";

export default function addProject() {
    let todosCont = document.getElementById('todosCont');
    while(todosCont.firstChild) {
        todosCont.removeChild(todosCont.lastChild);
    }
    let div = document.createElement('div');
    div.id = 'projectAddCont';
    todosCont.appendChild(div);
    let projectInput = document.createElement('input');
    projectInput.id = 'projectInput';
    projectInput.placeholder = 'Project\'s name';
    div.appendChild(projectInput);
    let addBtn = document.createElement('button');
    addBtn.id = 'addBtn';
    addBtn.innerHTML = 'Add';
    div.appendChild(addBtn);
    let cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancelBtn';
    cancelBtn.innerHTML = 'Cancel';
    div.appendChild(cancelBtn);

    //buttons funtionaliti
    addBtn.addEventListener('click', addBtnLogic);
    cancelBtn.addEventListener('click', cancelBtnLogic);
    //QoL things
    projectInput.focus();
};

function addBtnLogic() {
    const newProject = Project(document.getElementById('projectInput').value != "" ? document.getElementById('projectInput').value : 'New project');
    const ul = document.getElementById('projectList');
    localStorage.setItem(`project${localStorage.length}`, JSON.stringify({name: newProject.getName(), todos: newProject.getToDos()}));
    Projects.pushStorage(newProject);
    const newLi = document.createElement('li');
    newLi.id = newProject.getName().replace(/\s/g, "");
    newLi.innerHTML = newProject.getName();
    ul.appendChild(newLi);

    hideUI()
};

function cancelBtnLogic() {
    hideUI()
}

function hideUI() {
    let todosCont = document.getElementById('todosCont');
    while(todosCont.firstChild) {
        todosCont.removeChild(todosCont.lastChild);
    }
}
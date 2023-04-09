import Project from "./project";
import { Projects } from "./index";

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
    addBtn.innerHTML = 'Add';
    div.appendChild(addBtn);
    let cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancelBtn';
    cancelBtn.innerHTML = 'Cancel';
    div.appendChild(cancelBtn);

    //buttons functionalities
    addBtn.addEventListener('click', addBtnLogic);
    cancelBtn.addEventListener('click', cancelBtnLogic);
    //QoL things
    projectInput.focus();
};

function addBtnLogic() {
    // makes sure that there are no mathcing or empty ids
    const existingProjects = Projects.getStorage();
    const projectIds = existingProjects.map(p => p.getId());
    if(projectIds.some(id => id == (document.getElementById('projectInput').value).replace(/\s/g, ""))) {
        alert('The names have to be unique (spaces are ignored)');
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
    
        hideUI()
    }; 

};

function cancelBtnLogic() {
    hideUI()
}

function hideUI() {
    let mainCont = document.getElementById('mainCont');
    while(mainCont.firstChild) {
        mainCont.removeChild(mainCont.lastChild);
    }
}
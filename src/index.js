import addProject from './addProject.js';
import loadProjectsOnLoad from './loadProjectsOnLoad.js';
import Project from './project.js';
import { addProjectInterface } from './projectSelector.js';
export {Projects}


// this is where the Project instances are strored
const Projects = (() => {
    const storage = [];
    const getStorage = () => storage;
    const pushStorage = (p) => storage.push(p)
    return {getStorage, pushStorage}
})();

// loads the Project instances stored in the local storage
loadProjectsOnLoad();

// project add button 
document.getElementById('addProject').addEventListener('click', () => {
    addProject();
});

addProjectInterface()

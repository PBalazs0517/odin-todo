import addProject from './add-project.js';
import loadProjectsOnLoad from './loadProjectsOnLoad.js';
import Project from './project.js';
export {Projects}

const Projects = (() => {
    const storage = [];
    const getStorage = () => storage;
    const pushStorage = (p) => storage.push(p)
    return {getStorage, pushStorage}
})();


loadProjectsOnLoad();

document.getElementById('addProject').addEventListener('click', () => {
    addProject();
});
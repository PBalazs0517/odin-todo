import addProject from './add-project.js';
import loadProjectsOnLoad from './loadProjectsOnLoad.js';

loadProjectsOnLoad();

document.getElementById('addProject').addEventListener('click', () => {
    addProject();
});
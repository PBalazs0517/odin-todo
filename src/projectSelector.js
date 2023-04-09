export { addProjectInterface }

function addProjectInterface() {
    let projects = Array.from(document.getElementById('projectList').children);
    projects.shift();
    projects.forEach(p => {
        p.addEventListener('click', () => {
            
        })
    });
}

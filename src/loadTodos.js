import { activeProject } from './projectSelector.js';
import Todo from './todo.js';
import { Projects } from './index.js';

export default function() {
    let todos = activeProject.getToDos();
    let mainCont = document.getElementById('mainCont');
    while(mainCont.children.length > 2) {
        mainCont.removeChild(mainCont.lastChild)
    }
    todos.forEach((todo, index) => {
        let toDo = Todo(todo.name, todo.date, todo.priority, todo.state)
        let todoCont = document.createElement('div');
        todoCont.id = 'todoCont';
        mainCont.appendChild(todoCont);
        let todoName = document.createElement('h2');
        todoName.classList.add('todoName');
        todoName.innerHTML = toDo.getName();
        todoCont.appendChild(todoName);
        let todoDate = document.createElement('p');
        todoDate.classList.add('todoDate');
        todoDate.innerHTML = toDo.getDate();
        todoCont.appendChild(todoDate);
        let todoPriority = document.createElement('p');
        todoPriority.classList.add('todoPriority');
        todoPriority.innerHTML = toDo.getPriority();
        todoCont.appendChild(todoPriority);
        let todoState = document.createElement('input');
        todoState.type = 'checkbox';
        todoState.id = `todoState${index}`
        todoState.classList.add('todoState');
        todoState.checked = toDo.getState();
        todoCont.appendChild(todoState)
        todoState.addEventListener('click', (e) => {
            let todoState = document.getElementById(e.target.id);
            console.log(todoState);
            let newToDo = Todo(todo.name, todo.date, todo.priority, todoState.checked);
            activeProject.updateToDo(index, {name: newToDo.getName(), date: newToDo.getDate(), priority: newToDo.getPriority(), state: newToDo.getState()})
            localStorage.setItem(`project${activeProject.getId()}`, JSON.stringify({name: activeProject.getName(), id: activeProject.getId(), todos: activeProject.getToDos()}));
            Projects.updateProject(activeProject.getId(), activeProject);
        })
    });
}
import { activeProject } from './projectSelector.js';
import { Projects } from './index.js';
import Todo from './todo.js';
import Project from './project.js';
import loadTodos from './loadTodos.js';

// values that prevents a new add todo interfeca from generating
let active = false;

// creates a new todo
function addTodo() {
    // sets the value so it can not be run again
    active = true;
    // creates the interface
    let mainCont = document.getElementById('mainCont');
    let cont = document.createElement('div');
    cont.id = 'todoInterface';
    mainCont.appendChild(cont);
    let todoForm = document.createElement('div');
    todoForm.id = 'todoForm';
    cont.appendChild(todoForm);
    let todoNameIn = document.createElement('input');
    todoNameIn.id = 'todoNameIn'
    todoForm.appendChild(todoNameIn);
    let todoDateIn = document.createElement('input');
    todoDateIn.type = 'date';
    todoDateIn.id = 'todoDateIn';
    todoForm.appendChild(todoDateIn);
    let todoPriorityIn = document.createElement('select');
    todoPriorityIn.id = 'todoPriorityIn';
    todoForm.appendChild(todoPriorityIn);
    ['low', 'normal', 'high'].forEach(opt => {
        let option = document.createElement('option');
        option.innerHTML = opt;
        option.value = opt;
        todoPriorityIn.appendChild(option);
    });
    let addBtn = document.createElement('button');
    addBtn.id = 'addBtnTodo';
    addBtn.classList.add('addBtn');
    addBtn.innerHTML = 'Add';
    cont.appendChild(addBtn);
    let cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancelBtnTodo';
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.innerHTML = 'Cancel';
    cont.appendChild(cancelBtn);

    // button logic
    addBtn.addEventListener('click', addBtnLogic);
    cancelBtn.addEventListener('click', cancelBtnLogic);
}

function addTodoBtn() {
    let mainCont = document.getElementById('mainCont');
    let btn = document.createElement('button');
    btn.id = 'addTodo';
    btn.classList.add('addProjectAndTodo');
    let p = document.createElement('p');
    p.innerHTML = '+';
    btn.appendChild(p);
    mainCont.appendChild(btn); 
    // only runs when there is no other generates
    btn.addEventListener('click', () => {
        if(!(active)) {
            addTodo();
        };
    });
}

function addBtnLogic() {
    // onnly runs if both the date and the name is filled out
    if ((document.getElementById('todoNameIn').value).replace(/\s/g, "") == '' || document.getElementById('todoDateIn').value == '') {
        alert('Fill out all the menu options');
    } else {
        // generates an instance of todo  based on the inputs so it can be stored and worked with
        let newTodo = Todo(document.getElementById('todoNameIn').value, document.getElementById('todoDateIn').value, document.getElementById('todoPriorityIn').value);
        // adds the new todo to the active project's todo list
        activeProject.addToDos({name: newTodo.getName(), date: newTodo.getDate(), priority: newTodo.getPriority(), state: newTodo.getState()});
        // updates the project in the local storage
        localStorage.setItem(`project${activeProject.getId()}`, JSON.stringify({name: activeProject.getName(), id: activeProject.getId(), todos: activeProject.getToDos()}));
        // updates the project in the Projects object 
        Projects.updateProject(activeProject.getId(), activeProject);
        // and the instance that is stored on this value also gets updated
        activeProject = Projects.getStorage()[activeProject.getId()];
        // removes the existing todos from dom
        let mainCont = document.getElementById('mainCont');
        mainCont.removeChild(document.getElementById('todoInterface'));
        // sets the value false so it can be run agian
        active = false;
        // and adds the list to the dom
        loadTodos();
    }
};
function cancelBtnLogic() {
    let mainCont = document.getElementById('mainCont');
    mainCont.removeChild(document.getElementById('todoInterface'));
    active = false;
};

export { addTodoBtn, active }
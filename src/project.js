const counterCreator = () => {
    let count = 0;
    const getCount = () => count;
    const incrementCount = () => count++; 
    return { getCount, incrementCount };
  };

const counter = counterCreator();

const Project = (name, toDosList = []) => {
    const getName = () => name;
    const id = counter.getCount();
    counter.incrementCount();
    const getId = () => id;
    const toDos = toDosList;
    const addToDos = (todo) => toDos.push(todo);
    const getToDos = () => toDos;
    const updateToDo = (i, t) => toDos[i] = t;
    return {getName, getId, getToDos, addToDos, updateToDo};
} 

export default Project;

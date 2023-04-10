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
    const addToDos = (todo) => toDos.push();
    const getToDos = () => toDos;
    return {getName, getId, getToDos, addToDos};
} 

export default Project;

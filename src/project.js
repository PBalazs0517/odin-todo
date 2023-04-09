export default Project;

const Project = (name, toDosList = []) => {
    const getName = () => name;
    let toDos = toDosList;
    const addToDos = (todo) => toDos.push();
    const getToDos = () => toDos;
    return {getName, getToDos, addToDos};
} 


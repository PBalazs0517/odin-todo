const Project = (name, toDosList = []) => {
    const getName = () => name;
    const id = name.replace(/\s/g, "");
    const getId = () => id;
    const toDos = toDosList;
    const addToDos = (todo) => toDos.push();
    const getToDos = () => toDos;
    return {getName, getId, getToDos, addToDos};
} 

export default Project;

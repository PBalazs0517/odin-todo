const Todo = (project = "home", name = 'To do!', date = 'No Date', priority = 'low', state = false) => {
    const getProject = () => project;
    const getName = () => name;
    const getDate = () => date;
    const getPriority = () => priority;
    const getState = () => state

    return {
        getProject,
        getName,
        getDate,
        getPriority,
        getState,
    }
}

export default Todo;

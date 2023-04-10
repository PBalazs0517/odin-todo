const Todo = (name, date, priority, state = false) => {
    let currentState = state;
    const getName = () => name;
    const getDate = () => date;
    const getPriority = () => priority;
    const getState = () => currentState;

    return {
        getName,
        getDate,
        getPriority,
        getState,
    }
}

export default Todo;

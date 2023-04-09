export default Todo;

const Todo = (name = 'To do!', date = 'No Date', priority = 'low', state = false) => {
    const getName = () => name;
    const getDate = () => date;
    const getPriority = () => priority;
    const getState = () => state

    return {
        getName,
        getDate,
        getPriority,
        getState,
    }
}
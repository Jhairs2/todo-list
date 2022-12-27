// Brainstorm what kind of properties your todo-items 
// are going to have. At a minimum they should have a 
// title, description, dueDate and priority. You might 
// also want to include notes or even a checklist.
import createTodoContainer from "./createTodoDom";

const createTodo = (title, description, dueDate) => {

    return { title, description, dueDate };
}

const todoLibrary = () => {
    let todoArray = [];

    const getTodoList = () => todoArray

    const updateTodoList = () => {
        createTodoContainer().clearContent();
        for (let i = 0; i < getTodoList().length; i++) {
            createTodoContainer(getTodoList()[i].title, getTodoList()[i].dueDate).createContent();
        }
    }

    const addTodo = (title, description, dueDate) => {
        todoArray.push(createTodo(title, description, dueDate));
    }

    const deleteTodo = (todoIndex) => {
        todoArray.splice(todoIndex, 1);
        updateTodoList();
    }

    return { addTodo, deleteTodo, getTodoList, updateTodoList };
};

export { createTodo, todoLibrary };

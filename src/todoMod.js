// Brainstorm what kind of properties your todo-items 
// are going to have. At a minimum they should have a 
// title, description, dueDate and priority. You might 
// also want to include notes or even a checklist.
import createTodoContainer from "./createTodoDom";
import eventListeners from "./eventListeners";

const createTodo = (title, description, dueDate) => {

    return { title, description, dueDate };
}

const todoLibrary = () => {
    let todoArray = [];



    const getTodoList = () => todoArray;

    const updateTodoList = () => {
        createTodoContainer().clearContent();
        for (let i = 0; i < getTodoList().length; i++) {
            createTodoContainer(getTodoList()[i].title, getTodoList()[i].dueDate).createContent();
        }
        removeTodoFromPage();
        eventListeners().editTodo();
    }

    const addTodo = (title, description, dueDate) => {
        todoArray.push(createTodo(title, description, dueDate));
    }

    const deleteTodo = (todoIndex) => {
        todoArray.splice(todoIndex, 1);
        updateTodoList();
    }

    function removeTodoFromPage() {
        const trash = document.querySelectorAll('#trash');
        trash.forEach(todo => {
            todo.addEventListener('click', (e) => {
                deleteTodo(e.currentTarget.parentNode.parentNode.dataset.id);
            })
        })
    }


    return { addTodo, deleteTodo, getTodoList, updateTodoList };
};

export { createTodo, todoLibrary };

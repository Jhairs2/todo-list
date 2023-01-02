// Brainstorm what kind of properties your todo-items 
// are going to have. At a minimum they should have a 
// title, description, dueDate and priority. You might 
// also want to include notes or even a checklist.
import createTodoContainer from "./createTodoDom";
import eventListeners from "./eventListeners";
import { parseISO, isToday, isSameWeek } from "date-fns";

const createTodo = (title, description, dueDate, checked = false) => {

    return { title, description, dueDate, checked };
}

const todoLibrary = () => {
    let todoArray = [];
    const todayCount = [];
    const weekCount = [];


    const getTodoList = () => todoArray;
    const getTodayCount = () => todayCount;
    const getWeekCount = () => weekCount;


    const updateTodoList = () => {
        createTodoContainer().clearContent();
        sortLibrary();
        for (let i = 0; i < getTodoList().length; i++) {
            createTodoContainer(getTodoList()[i].title, getTodoList()[i].dueDate).createContent();

            if (todoArray[i].checked) {
                const todo = document.querySelectorAll(".todo-container");
                const checkbox = document.querySelectorAll("#todo-check");

                todo[i].classList.add("strike");
                checkbox[i].checked = "true";
            }
            else if(todoArray[i].checked = false){
                const todo = document.querySelectorAll(".todo-container");
                const checkbox = document.querySelectorAll("#todo-check");

                todo[i].classList.remove("strike");
                checkbox[i].checked = "false";
            }

            console.log(todoArray[i])
        }



        countOfTodos();
        removeTodoFromPage();
        eventListeners().editTodo(todoArray);
        eventListeners().showDetails(todoArray);
        eventListeners().checkTodo(todoArray);
    }

    const addTodo = (title, description, dueDate) => {
        todoArray.push(createTodo(title, description, dueDate));
    }

    const deleteTodo = (todoIndex) => {
        todoArray.splice(todoIndex, 1);
        updateTodoList();

    }

    const sortLibrary = () => {
        todoArray = getTodoList().sort((a, b) => {
            let da = new Date(a.dueDate),
                db = new Date(b.dueDate)
            return da - db;
        })
    }

    const removeTodoFromPage = () => {
        const trash = document.querySelectorAll('#trash');
        trash.forEach(todo => {
            todo.addEventListener('click', (e) => {
                deleteTodo(e.currentTarget.parentNode.parentNode.dataset.id);
            })
        })
    }


    const todayCheck = () => {
        createTodoContainer().clearContent();
        todayCount.length = 0;
        sortLibrary();
        for (let i = 0; i < todoArray.length; i++) {
            if (isToday(parseISO(todoArray[i].dueDate))) {
                createTodoContainer(getTodoList()[i].title, getTodoList()[i].dueDate).createContent();

                if (todoArray[i].checked) {
                    const todo = document.querySelectorAll(".todo-container");
                    const checkbox = document.querySelectorAll("#todo-check")

                    todo[i].classList.add("strike");
                    checkbox[i].checked = "true";
                }
                else if(todoArray[i].checked = false) {
                    const todo = document.querySelectorAll(".todo-container");
                    const checkbox = document.querySelectorAll("#todo-check")

                    todo[i].classList.remove("strike");
                    checkbox[i].checked = "false";
                }
            }


            else {
                continue;
            }

        }
        removeTodoFromPage();
        eventListeners().editTodo(todoArray);
        eventListeners().showDetails(todoArray);
        eventListeners().checkTodo(todoArray);
    }

    const WeekCheck = () => {
        createTodoContainer().clearContent();
        weekCount.length = 0
        sortLibrary();
        for (let i = 0; i < todoArray.length; i++) {
            if (isSameWeek(Date.now(), parseISO(todoArray[i].dueDate))) {
                createTodoContainer(getTodoList()[i].title, getTodoList()[i].dueDate).createContent();

                if (todoArray[i].checked) {
                    const todo = document.querySelectorAll(".todo-container");
                    const checkbox = document.querySelectorAll("#todo-check")

                    todo[i].classList.add("strike");
                    checkbox[i].checked = "true";
                }
                else if(todoArray[i].checked = false) {
                    const todo = document.querySelectorAll(".todo-container");
                    const checkbox = document.querySelectorAll("#todo-check")

                    todo[i].classList.remove("strike");
                    checkbox[i].checked = "false";
                }
            }


            else {
                continue;
            }

        }

        removeTodoFromPage();
        eventListeners().editTodo(todoArray);
        eventListeners().showDetails(todoArray);
        eventListeners().checkTodo(todoArray);
    }


    const countOfTodos = () => {
        todayCount.length = 0;
        weekCount.length = 0

        const homeCount = document.querySelector('.home-count');
        const todayListCount = document.querySelector('.today-count');
        const weekListCount = document.querySelector('.week-count');

        for (let i = 0; i < todoArray.length; i++) {
            if (isToday(parseISO(todoArray[i].dueDate))) {
                todayCount.push(todoArray[i]);
            }
        }

        for (let i = 0; i < todoArray.length; i++) {
            if (isSameWeek(Date.now(), parseISO(todoArray[i].dueDate))) {
                weekCount.push(todoArray[i])
            }
        }

        homeCount.textContent = `${todoArray.length}`;
        todayListCount.textContent = `${todayCount.length}`;
        weekListCount.textContent = `${weekCount.length}`;

    }


    return { addTodo, deleteTodo, getTodoList, todayCheck, WeekCheck, updateTodoList };
};

export { createTodo, todoLibrary };

import { isPast, isToday, parseISO } from "date-fns";
import dropmenu from "./dropMenu";
import savedStorage from "./storage";

const formValidation = (array, events) => {
    const divs = document.querySelectorAll('#menu div');

    const submitButton = document.querySelector('.new-todo');
    const submitFormData = (e) => {
        const form = document.querySelector('.user-info');
        const formTitle = document.querySelector('#input-title');
        const formDueDate = document.querySelector('#input-date');
        const formDescription = document.querySelector('#input-description');

        e.preventDefault();


        if (formTitle.value == "" || formDueDate.value == "" ||
            ((isPast(parseISO(formDueDate.value))) & (!isToday(parseISO(formDueDate.value))))) {
            console.log("error")
            return
        }

        if (submitButton.classList.contains("edit")) {

            array.getTodoList()[events.getPrevTodo()].title = formTitle.value;
            array.getTodoList()[events.getPrevTodo()].dueDate = formDueDate.value;
            array.getTodoList()[events.getPrevTodo()].description = formDescription.value;

            array.sortLibrary();
            array.updateTodoList();
            console.log(array[events.getPrevTodo()]);
            savedStorage().saveTodo(events.getPrevTodo(), array.getTodoList()[events.getPrevTodo()]);
            form.reset();

            events.closeModal();


        }
        else if (!(submitButton.classList.contains("edit"))) {

            array.addTodo(formTitle.value, formDescription.value, formDueDate.value);
            array.updateTodoList();
            form.reset();
            events.closeModal();
            dropmenu().removeClass();
            divs[0].classList.add("selected-tab");
            console.log(events.getPrevTodo());
        }
    }



    const formInteractivity = () => {
        submitButton.addEventListener('click', submitFormData)
        dateFormFix();
    }

    const dateFormFix = () => {
        const formDueDate = document.querySelector('#input-date');

        formDueDate.onfocus = () => {
            formDueDate.type = 'date';
            formDueDate.readOnly = false;
            formDueDate.showPicker();
        }

        formDueDate.onblur = () => {
            formDueDate.type = 'text';
            formDueDate.readOnly = true;
        }
    }


    return { formInteractivity }
}


export default formValidation;
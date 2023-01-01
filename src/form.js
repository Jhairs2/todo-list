import dropmenu from "./dropMenu";
const formValidation = (array, events) => {
    const divs = document.querySelectorAll('#menu div');

    const submitButton = document.querySelector('.new-todo');
    const submitFormData = (e) => {
        const form = document.querySelector('.user-info');
        const formTitle = document.querySelector('#input-title');
        const formDueDate = document.querySelector('#input-date');
        const formDescription = document.querySelector('#input-description');

        e.preventDefault();

        if (submitButton.classList.contains("edit")) {

            array.getTodoList()[events.getPrevTodo()].title = formTitle.value;
            array.getTodoList()[events.getPrevTodo()].dueDate = formDueDate.value;
            array.getTodoList()[events.getPrevTodo()].description = formDescription.value;

            array.updateTodoList();
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
    }



    return { formInteractivity }
}


export default formValidation;
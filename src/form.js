
const formValidation = (array, events) => {
    
    const submitButton = document.querySelector('.new-todo');
    const submitFormData = (e) => {
        const form = document.querySelector('.user-info');
        const ftitle = document.querySelector('#input-title');
        const dueDate = document.querySelector('#input-date');
        const description = document.querySelector('#input-description');
        e.preventDefault();

        if (submitButton.classList.contains("edit")) {
            array.getTodoList()[events.getPrevTodo()].title = ftitle.value;

            array.updateTodoList();
            form.reset();

            events.closeModal();

        }
        else if (!(submitButton.classList.contains("edit"))) {

            array.addTodo(ftitle.value, description.value, dueDate.value);
            array.updateTodoList();
            form.reset();
            events.closeModal();
            console.log(events.getPrevTodo());
        }
    }

        

    const formInteractivity = () => {
        submitButton.addEventListener('click', submitFormData)
    }



    return { formInteractivity }
}


export default formValidation;
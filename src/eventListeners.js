
const eventListeners = () => {

    let prevTodo;
    const modal = document.querySelector('.modal')
    const openButton = document.querySelector('#add-todo');
    const closeButton = document.querySelector('#close-modal');
    const formTitle = document.querySelector('#form-title');
    const submitButton = document.querySelector('.new-todo');
    const formInputTitle = document.querySelector('#input-title');
    const formInputDueDate = document.querySelector('#input-date');
    const formInputDescription = document.querySelector('#input-description');
    const body = document.querySelector('body');


    const getPrevTodo = () => prevTodo;

    const openModal = (e) => {
        modal.removeAttribute('open');

        if (e.target == openButton) {

            submitButton.classList.remove("edit");
            submitButton.textContent = 'ADD TODO';
            formTitle.textContent = 'Add Todo';

            formInputTitle.placeholder = "wash dishes";
            formInputDueDate.placeholder = 'mm / dd / yyyy';
            formInputDescription.placeholder = "add a description...";

            modal.showModal()

        } else {
            modal.showModal()
        }
    }


    const closeModal = () => {
        const form = document.querySelector('.user-info');
        const dc = document.querySelector('.details');
        if (dc.classList.contains('open')) {
            dc.classList.remove('open');
            dc.style.display = 'none';
            form.style.display = "";
        }
        modal.close();
        form.reset();

    }

    const setInputFields = (array, e) => {

        formInputTitle.value = "";
        formInputTitle.placeholder = array[e.target.parentNode.parentNode.dataset.id].title;

        formInputDueDate.value = "";
        formInputDueDate.placeholder = array[e.target.parentNode.parentNode.dataset.id].dueDate;

        formInputDescription.value = "";
        formInputDescription.placeholder = array[e.target.parentNode.parentNode.dataset.id].description;
    }

    const editTodo = (array) => {
        const editButton = document.querySelectorAll('#edit');

        editButton.forEach(todo => {
            todo.addEventListener('click', (e) => {
                setInputFields(array, e);
                formTitle.textContent = 'Edit Todo';
                submitButton.textContent = 'EDIT TODO';
                submitButton.classList.add("edit");
                openModal(e);
            })
        })
    }



    const lastTodoClicked = () => {
        body.addEventListener('click', (e) => {
            if (e.target.id == "edit" || e.target.id == "info") {
                prevTodo = e.target.parentNode.parentNode.dataset.id;
            }
        })
    }

    const showDetails = (array) => {
        const info = document.querySelectorAll('#info');

        info.forEach(todo => {
            todo.addEventListener('click', (e) => {

                const form = document.querySelector('.user-info');
                const details = document.querySelector('.details');
                const todoTitle = document.querySelector('.detail-info-title');
                const todoDescription = document.querySelector('.detail-info-description');
                const todoDate = document.querySelector('.detail-info-date');

                details.classList.add('open');

                todoTitle.textContent = `${array[e.target.parentNode.parentNode.dataset.id].title}`;
                todoDescription.textContent = `${array[e.target.parentNode.parentNode.dataset.id].description}`;
                todoDate.textContent = `${array[e.target.parentNode.parentNode.dataset.id].dueDate}`;

                form.style.display = 'none';
                details.style.display = "";

                modal.showModal();
            })
        })
    }

    const checkTodo = (array) => {
        const checkbox = document.querySelectorAll("#todo-check")


        checkbox.forEach(box => {

            box.addEventListener("click", (e) => {
                if (e.target.checked) {

                    array[e.target.parentNode.dataset.id].checked = true
                    e.target.parentNode.classList.add("strike");
                    console.log(array[e.target.parentNode.dataset.id].checked)
                }
                else {
                    array[e.target.parentNode.dataset.id].checked = false;
                    e.target.parentNode.classList.remove("strike");
                }
            })
        })

    }

    const addInteractivity = () => {
        openButton.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        lastTodoClicked();

    }



    return { showDetails, openModal, closeModal, editTodo, addInteractivity, checkTodo, getPrevTodo, showDetails };
}

export default eventListeners;
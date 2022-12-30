

const eventListeners = () => {
    let prevTodo;
    const modal = document.querySelector('.modal')
    const openButton = document.querySelector('#add-todo');
    const closeButton = document.querySelector('#close-modal');
    const formTitle = document.querySelector('#form-title');
    const submitButton = document.querySelector('.new-todo');
    const body = document.querySelector('body');


    const getPrevTodo = () => prevTodo;

    const openModal = (e) => {
        modal.removeAttribute('open');

        if (e.target == openButton) {

            submitButton.classList.remove("edit");
            submitButton.textContent = 'ADD TODO';
            formTitle.textContent = 'Add Todo';
            modal.showModal()

        } else {
            modal.showModal()
        }
    }


    const closeModal = () => {
        const form = document.querySelector('.user-info');
        const dc = document.querySelector('.details-container')
        if (dc) {
            dc.remove();
        }
        modal.close();
        form.reset();

    }

    const editTodo = () => {
        const editButton = document.querySelectorAll('#edit');

        editButton.forEach(todo => {
            todo.addEventListener('click', (e) => {
                formTitle.textContent = 'Edit Todo';
                submitButton.textContent = 'EDIT TODO';
                submitButton.classList.add("edit");
                openModal(e);
            })
        })
    }

    const lastTodoClicked = () => {
        body.addEventListener('click', (e) => {
            if (e.target.id == "edit") {
               prevTodo = e.target.parentNode.parentNode.dataset.id;
            }
        })
    }

    const addInteractivity = () => {
        openButton.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        lastTodoClicked();

    }

    const createDetailsContainer = () => {
        const div = document.createElement('div');
        div.classList.add('details-container');
        return div;
    }

    const showDetails = () => {
        const container = document.querySelectorAll('.todo-container')
        container.forEach(todo => {
            todo.addEventListener('click', () => {
                const modal = document.querySelector('.modal');
                const form = document.querySelector('.user-info');
                form.style.display = 'none';
                modal.append(createDetailsContainer());
                modal.showModal();
            })
        })
    }

    return { showDetails, openModal, closeModal, editTodo, addInteractivity, getPrevTodo };
}

export default eventListeners;
import editImg from './assets/clipboard-edit-outline.svg';
import trashImg from './assets/trash-can-outline.svg';
import infoImg from './assets/information-outline.svg';


const createTodoContainer = (todoTitle, todoDueDate) => {

    const content = document.querySelector('.content');

    // Create div container for todo
    const createContainer = () => {
        const toDoContainer = document.createElement('div');
        toDoContainer.classList.add('todo-container');
        return toDoContainer;
    }

    // Create title section
    const createTitle = () => {
        const title = document.createElement('span')
        title.classList.add('todo-title');
        title.textContent = todoTitle;
        return title;
    }

    const createCheck = () => {
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "todo-check";
        checkbox.id = "todo-check";
        checkbox.checked = false

        return checkbox;

    }

    // Create date section
    const createDueDate = () => {
        const dueDateSection = document.createElement('div');
        const dueDate = document.createElement('p');
        dueDate.classList.add('due-Date');
        dueDate.textContent = todoDueDate;
        dueDateSection.append(dueDate);
        return dueDateSection

    }
    const createIcons = () => {
        const iconSection = document.createElement('div');
        const edit = document.createElement('img');
        const trash = document.createElement('img');
        const info = document.createElement('img');
        iconSection.classList.add('todo-icons');
        edit.src = editImg;
        edit.id = 'edit';
        trash.src = trashImg;
        trash.id = 'trash';
        info.src = infoImg;
        info.id = 'info';
        iconSection.append(edit, trash, info);
        return iconSection;
    }
    const addID = () => {
        const tab = document.querySelectorAll('.todo-container');
        let i = 0;
        tab.forEach(todo => {
            todo.dataset.id = i;
            i++;
        })
        console.log('done!')
    }


    const clearContent = () => {
        const content = document.querySelector('.content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        };
    };


    // add content to tab and then to div
    const createContent = () => {
        const box = createContainer();
        box.append(createCheck(), createTitle(), createDueDate(), createIcons());
        content.append(box);
        addID();
    };


    return { createContent, clearContent };

}

export default createTodoContainer;
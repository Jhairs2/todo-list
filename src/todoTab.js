// Brainstorm what kind of properties your todo-items 
// are going to have. At a minimum they should have a 
// title, description, dueDate and priority. You might 
// also want to include notes or even a checklist.
import editImg from './assets/clipboard-edit-outline.svg';
import trashImg from './assets/trash-can-outline.svg';

const createTodoBox = (inputTitle = "Blank", inputDescription = "Blank", inputDueDate = "Blank") => {
    // Create div container for todo
    const createBox = () => {  
    const toDo = document.createElement('div');
    toDo.classList.add('todo-container');
    toDo.dataset.id = "";
    return toDo;
    }
    
    // Create title section
    const createTitle = () => {  
    const title = document.createElement('span')
    title.classList.add('todo-title');
    title.textContent = inputTitle;
    return title;
    }


    // Create description section
    const createDescription = () => {
    const descriptionSection = document.createElement('div');
    const description = document.createElement('p');
    description.classList.add('todo-description');
    description.textContent = inputDescription;
    descriptionSection.append(description);
    return descriptionSection;
    }

    // Create date section
    const createDueDate = () => {
    const dueDateSection = document.createElement('div');
    const dueDate = document.createElement('p');
    dueDate.classList.add('due-Date');
    dueDate.textContent = inputDueDate
    dueDateSection.append(dueDate);
    return dueDateSection
    
    }
    const createIcons = () => {
        const iconSection = document.createElement('div');
        const edit = document.createElement('img');
        const trash = document.createElement('img');
        iconSection.classList.add('todo-icons');
        edit.src = editImg;
        edit.id = 'edit'
        trash.src = trashImg
        trash.id = 'trash'
        iconSection.append(edit, trash);
        return iconSection;
        }
    // add content to tab and then to conetent div
    const createContent = () => {
        const box = createBox();
        box.append(createTitle(), createDescription(), createDueDate(), createIcons());
        return box 
    }


    return {createContent};
    
}

export default createTodoBox;

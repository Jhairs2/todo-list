// Brainstorm what kind of properties your todo-items 
// are going to have. At a minimum they should have a 
// title, description, dueDate and priority. You might 
// also want to include notes or even a checklist.

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

    // add content to tab and then to conetent div
    const createContent = () => {
        const box = createBox();
        box.append(createTitle(), createDescription(), createDueDate());
        return box 
    }


    return {createContent};
    
}

export default createTodoBox;

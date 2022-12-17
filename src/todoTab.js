// Brainstorm what kind of properties your todo-items 
// are going to have. At a minimum they should have a 
// title, description, dueDate and priority. You might 
// also want to include notes or even a checklist.

const createTodoBox = () => {
    // Get content container
    const content = document.querySelector('.content');

    // Create div container for todo
    const toDo = document.createElement('div');
    toDo.classList.add('todo-container');

    // Create title section
    const title = document.createElement('span')
    title.classList.add('todo-title');

    // Create description section
    const descriptionSection = document.createElement('div');
    const description = document.createElement('p');
    description.classList.add('todo-description');
    descriptionSection.append(description);

    // Create date section
    const dueDateSection = document.createElement('div');
    const dueDate = document.createElement('p');
    dueDate.classList.add('due-Date');
    dueDateSection.append(dueDate);

    // add content to tab and then to conetent div
    toDo.append(title, descriptionSection, dueDateSection)
    content.append(toDo);
}

export default createTodoBox;

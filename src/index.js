import './styles/style.css'
import { todoLibrary, createTodo } from './todoMod'
import dropmenu from './dropMenu';
import eventListeners from './eventListeners';


const events = eventListeners();
events.addInteractivity();
const Library = todoLibrary()
const submitButton = document.querySelector('.new-todo');


submitButton.addEventListener('click', submitFormData)


dropmenu();

function submitFormData(e) {
    
   
    const form = document.querySelector('.user-info');
    const ftitle = document.querySelector('#input-title');
    const dueDate = document.querySelector('#input-date');
    const description = document.querySelector('#input-description');
    e.preventDefault();

    if (submitButton.classList.contains("edit")) {
        Library.getTodoList()[events.getPrevTodo()].title = ftitle.value;

        Library.updateTodoList();
        form.reset();

       events.closeModal();
        
    } 
    else if (!(submitButton.classList.contains("edit")))
    {
      
        Library.addTodo(ftitle.value, description.value, dueDate.value);
        Library.updateTodoList();
        form.reset();
        events.closeModal();
    }
    
}


  


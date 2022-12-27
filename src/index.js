import './styles/style.css'
import { todoLibrary, createTodo } from './todoMod'
import dropmenu from './dropMenu';



const Library = todoLibrary()

const modal = document.querySelector('.modal');
const openButton = document.querySelector('#add-todo');
const closeButton = document.querySelector('#close-modal');
const submitButton = document.querySelector('.new-todo');
const body = document.querySelector('body',);



body.addEventListener('click', deleteOrEdit);
openButton.addEventListener('click', openForm)
closeButton.addEventListener('click', closeForm);
submitButton.addEventListener('click', submitFormData)


dropmenu();


function submitFormData(e) {
    const form = document.querySelector('.user-info');
    const title = document.querySelector('#input-title');
    const dueDate = document.querySelector('#input-date');
    const description = document.querySelector('#input-description');
    
    e.preventDefault();
    Library.addTodo(title.value, description.value, dueDate.value);
    Library.updateTodoList();
    form.reset();
    closeForm()


}




function openForm(e) {

    modal.showModal()
}

function closeForm() {
    modal.close()
}

function deleteOrEdit(e) {
    if (e.target.id == 'trash') {
        Library.deleteTodo(e.offsetParent);
        console.log(Library.getTodoList())
    }
}

function edit() {
    if(Library.getTodoList().length == 1) {
    const title = document.querySelectorAll('.todo-title');
    title.addEventListener('click', (e)=> {
        title.contentEditable = 'true';
        e.style.backgroundColor = 'white';
    })
} else {
    return 
}
}
edit()
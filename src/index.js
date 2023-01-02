import './styles/style.css'
import { todoLibrary, createTodo } from './todoMod'
import dropmenu from './dropMenu';
import eventListeners from './eventListeners';
import formValidation from './form';




const Library = todoLibrary()
const events = eventListeners();
events.addInteractivity();
formValidation(Library, events).formInteractivity();
dropmenu().menuInteractivity(Library);


window.onload = () => {

    Library.updateTodoList();

}





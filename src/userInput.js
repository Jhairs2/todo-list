import createTodoBox from "./todoTab";
import saveTabs from './saveTabs';

const formHandlingAndData = () => {
const modal = document.querySelector('.modal');

    const openAndCloseModal = () => {
        
        const openButton = document.querySelector('#add-todo');
        const closeButton = document.querySelector('#close-modal ');
        openButton.addEventListener('click', () => {
            modal.showModal();
        })

        closeButton.addEventListener('click', () => {
            modal.close();
        })

        
    }


    const formData = () => {
        const formTitle = document.querySelector('#input-title');
        const formDate = document.querySelector('#input-date');
        const formDescription = document.querySelector('#input-description');
        return {formTitle, formDate, formDescription};
    
        }

    const submitFormData = () => {
        const content = document.querySelector('.content');
        const submitButton = document.querySelector('.new-todo');
        const form = document.querySelector('.user-info');
        submitButton.addEventListener('click', (e)=> {
            e.preventDefault();
            const tab = createTodoBox(formData().formTitle.value, formData().formDescription.value, formData().formDate.value).createContent();
            content.append(tab);
            form.reset();
            modal.close();
            ;
        })
        
    }
    return {openAndCloseModal, submitFormData}
}

export default formHandlingAndData;
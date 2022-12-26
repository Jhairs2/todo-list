import createTodoBox from "./todoTab";

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

    
 
    
    return {openAndCloseModal, formData}
}

export default formHandlingAndData;
const formHandlingAndData = () => {

    const openModal = () => {
        const modal = document.querySelector('.modal');
        const openButton = document.querySelector('#add-todo');

        openButton.addEventListener('click', () => {
            modal.showModal();
        })
    }
 return {openModal}
}

export default formHandlingAndData;
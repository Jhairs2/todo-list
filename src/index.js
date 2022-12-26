import saveTabs from './saveTabs';
import './styles/style.css';
import createTodoBox from './todoTab';
import dropmenu from './dropMenu';
import formHandlingAndData from './userInput';


formHandlingAndData().openAndCloseModal();


dropmenu();

const modal = document.querySelector('.modal');
const content = document.querySelector('.content');
const div = createTodoBox('dsfafa', 'fafa', 'faf').createContent();
const div2 = createTodoBox().createContent();
const tabs = document.querySelectorAll('li');
const save = saveTabs();
const save2 = saveTabs();
const save3 = saveTabs();
save.saveTab(div);
save.saveTab(div2)

content.append(div, div2);
save.addIndex();

const example = document.querySelectorAll('[data-id]');


tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        switch (e.target.id) {

            case 'Home':

                removeSelected();
                tab.classList.add('selected-tab');
                removeAll();
                console.log(save.getTabs())
                getPageTabs(save.getTabs())
                break;



            case 'Today':
                removeSelected();
                tab.classList.add('selected-tab');
                removeAll();
                console.log(save2.getTabs())
                getPageTabs(save2.getTabs())
                break;


            case 'Week':
                removeSelected();
                tab.classList.add('selected-tab');
                removeAll();
                getPageTabs(save3.getTabs())
                break;
        }


    })
})

function removeAll() {
    content.innerHTML = "";
}

function getPageTabs(tabs) {
    for (let i = 0; i < tabs.length; i++) {
        content.append(tabs[i]);
    }
}

function removeSelected() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('selected-tab');
    }
}

function addTodo() {
    const selectedTab = document.querySelector('.selected-tab');
    console.log(selectedTab.id)
    switch (selectedTab.id) {

        case 'Home':
            save.saveTab(content.lastChild);
            save.addIndex();
            break;



        case 'Today':
            save2.saveTab(content.lastChild);
            save2.addIndex();
            break;


        case 'Week':
            save3.saveTab(content.lastChild);
            save3.addIndex();
            break;
    }
}




const submitButton = document.querySelector('.new-todo');
submitButton.addEventListener('click', submitFormData)

function submitFormData(e) {

    const content = document.querySelector('.content');
    const form = document.querySelector('.user-info');
    e.preventDefault();
    const tab = createTodoBox(formHandlingAndData().formData().formTitle.value, formHandlingAndData().formData().formDescription.value, formHandlingAndData().formData().formDate.value).createContent();
    content.append(tab);
    addTodo();
    deleteTab();
    form.reset();
    modal.close();
}

deleteTab();


function deleteTab() {
    const trash = document.querySelectorAll('#trash');
    
    trash.forEach(tab => {
        const selectedTab = document.querySelector('.selected-tab');
        tab.addEventListener('click', (e) => {
            switch (selectedTab.id) {

                case 'Home':
                    save.deleteTab(e.currentTarget.parentNode.parentNode.dataset.id);
                    save.addIndex();
                    e.currentTarget.parentNode.parentNode.remove();
                    break;



                case 'Today':
                    save2.deleteTab(e.currentTarget.parentNode.parentNode.dataset.id);
                    save2.addIndex();
                    e.currentTarget.parentNode.parentNode.remove();
                    break;


                case 'Week':
                    save3.deleteTab(e.currentTarget.parentNode.parentNode.dataset.id);
                    save3.addIndex();
                    e.currentTarget.parentNode.parentNode.remove();
                    break;
            }
        })

    })
}

console.log(trash);

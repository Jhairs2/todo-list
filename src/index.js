import saveTabs from './saveTabs';
import './styles/style.css';
import createTodoBox from './todoTab';
import dropmenu from './dropMenu';
import menuIcon from './assets/menu.svg';
import formHandlingAndData from './userInput';

const menuImg = document.getElementById('header-menu');
menuImg.src = menuIcon;
formHandlingAndData().openAndCloseModal();
formHandlingAndData().submitFormData();
dropmenu();


const content = document.querySelector('.content');
const div = createTodoBox('dsfafa','fafa','faf').createContent();
const div2 = createTodoBox().createContent();
const tabs = document.querySelectorAll('li');
let save = saveTabs();
save.saveTab(div);
save.saveTab(div2)

content.append(div,div2);
save.addIndex();
console.log(save.getTabs());

const example = document.querySelectorAll('[data-id]');


tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
       switch(e.target.id) {

        case 'Home':
            removeSelected();
            tab.classList.add('selected-tab');
            removeAll();
            getPageTabs(save.getTabs())
            break;

       
       
        case 'Today':
            removeSelected();
            tab.classList.add('selected-tab');
            removeAll();
            break;


        case 'Week':
            removeSelected();
            tab.classList.add('selected-tab');
            removeAll();
            break;
        }

        
    })
})

function removeAll() {
    content.innerHTML = "";
}

function getPageTabs(tabs) {

            for(let i = 0; i < tabs.length; i++) {
                content.append(tabs[i]);
            }
}

function removeSelected() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('selected-tab');
    }
}
const trash = document.querySelectorAll('#trash');



trash.forEach(tab => {
    tab.addEventListener('click', (e)=> {
    save.deleteTab(e.currentTarget.parentNode.parentNode.dataset.id);
    e.currentTarget.parentNode.parentNode.remove();
    save.addIndex();
    console.log(save.getTabs());
})
})



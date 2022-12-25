import saveTabs from './saveTabs';
import './styles/style.css';
import createTodoBox from './todoTab';
import dropmenu from './dropMenu';
import menuIcon from './assets/menu.svg';
import formHandlingAndData from './userInput';

const dialog = document.querySelector('.modal');
dialog.showModal();
const menuImg = document.getElementById('header-menu');
menuImg.src = menuIcon;
formHandlingAndData().openModal();
dropmenu();
const content = document.querySelector('.content');
const div = createTodoBox().createContent();
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
            removeAll();
            getPageTabs(save.getTabs())
            break;

       
       
        case 'Today':
            removeAll();
            break;


        case 'week':
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


const trash = document.querySelectorAll('#trash');



trash.forEach(tab => {
    tab.addEventListener('click', (e)=> {
    save.deleteTab(e.currentTarget.parentNode.parentNode.dataset.id);
    e.currentTarget.parentNode.parentNode.remove();
    save.addIndex();
    console.log(save.getTabs());
})
})



import saveTabs from './saveTabs';
import './styles/style.css';
import createTodoBox from './todoTab';


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
example.forEach(e => {
    e.addEventListener('click', (b)=> {
    save.deleteTab(b.currentTarget.dataset.id);
    console.log(b.currentTarget.dataset.id);
    console.log(save.getTabs())
    removeAll();
})
})

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        if(e.target.id == 'Home' ) {
            removeAll();
            // const list = save.getTabs() 
            // for(let i = 0; i < list.length; i++) {
            //     content.append(list[i]);
            // }
        }
        
    })
})

function removeAll() {
    content.innerHTML = "";
}

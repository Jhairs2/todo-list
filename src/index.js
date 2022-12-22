import saveTabs from './saveTabs';
import './styles/style.css';
import createTodoBox from './todoTab';


const content = document.querySelector('.content');
const div = createTodoBox().createContent();
const div2 = createTodoBox().createContent();
let save = saveTabs();
save.saveTab(div);
save.saveTab(div2)

content.append(div,div2);
save.addIndex();
console.log(save.getTabs());

div2.addEventListener('click', (e)=> {
    console.log(e.currentTarget);
})


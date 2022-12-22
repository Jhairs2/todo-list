// Homepage tabs will be saved here

const saveTabs = () => {
    let _tabs = [];

    const saveTab = (tab) => {
       return _tabs.push(tab);
        
    }

    const getTabs = () => _tabs


    const addIndex = () => {
        const data = document.querySelectorAll('.todo-container');
        let index = 0;
        data.forEach(element => {
            element.dataset.id = `${index}`;
            index++;
        });
    }


    return { saveTab, getTabs, addIndex };
}

export default saveTabs;

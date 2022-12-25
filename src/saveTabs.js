// Homepage tabs will be saved here

const saveTabs = () => {
    let _tabs = [];

    const saveTab = (tab) => {
       return _tabs.push(tab);
        
    }

    const getTabs = () => {
    if(!_tabs) {
        console.log("no todos");
    }
    else {
        return _tabs;
    }
}

    const addIndex = () => {
        const data = document.querySelectorAll('.todo-container');
        let index = 0;
        data.forEach(element => {
            element.dataset.id = `${index}`;
            index++;
        });
    }

    const deleteTab = (tabIndex) => {
         _tabs.splice(tabIndex, 1);
    }


    return { saveTab, getTabs, addIndex, deleteTab};
}

export default saveTabs;




const savedStorage = () => {
    const storage = localStorage;

    const saveTodo = (index, todo) => {
        storage.setItem(`${index}`, JSON.stringify(todo));
        console.log(storage.getItem(index))
    }

    const getStorage = () => {
        let savedTodos = [];
        for (let i = 0; i < storage.length; i++) {
            savedTodos.push(JSON.parse(storage.getItem(`${i}`)));
        }


        return savedTodos;
    }

    const removeTodo = (index) => {
        let store = getStorage();
        clearStorage();
        store.splice(index, 1);
        for (let i = 0; i < store.length; i++) {
            localStorage.setItem(`${i}`, JSON.stringify(store[i]));
        }
    }

    const clearStorage = () => storage.clear();
    const getLengthOfStorage = () => storage.length;

    return { saveTodo, removeTodo, getStorage, clearStorage, getLengthOfStorage }
}

export default savedStorage;

import todoLibrary from "./todoMod";

const dropmenu = () => {

    const test = () => {
        const menu = document.querySelector('.side-bar');
        const img = document.querySelector('#header-menu');
        const content = document.querySelector('.content');
        img.addEventListener('click', () => {
            if (menu.style.visibility === "hidden") {
                menu.style.visibility = "visible";
                img.classList.add('selected-menu');
                content.classList.remove("big");
            } else {
                menu.style.visibility = "hidden";
                img.classList.remove('selected-menu');
                content.classList.add('big');
            }

        })

    }

    const removeClass = () => {
        const tabs = document.querySelectorAll('#menu div')
        tabs.forEach(tab => {
            tab.classList.remove('selected-tab');
        })

    }



    const menuInteractivity = (todoArray) => {
        test();
        const divs = document.querySelectorAll('#menu div');
        console.log(divs);

        divs.forEach(tab => {

            tab.addEventListener('click', (e) => {

                switch (e.target.id) {

                    case 'Home':
                        removeClass();
                        divs[0].classList.add("selected-tab");
                        todoArray.updateTodoList();
                        break;

                    case 'Today':
                        console.log(e);
                        removeClass();
                        divs[1].classList.add("selected-tab");
                        todoArray.todayCheck();
                        break;

                    case 'Week':
                        console.log(e);
                        removeClass();
                        divs[2].classList.add("selected-tab");
                        todoArray.WeekCheck();
                        break;

                }



            })
        })

    }

    return { menuInteractivity, removeClass };

}

export default dropmenu;
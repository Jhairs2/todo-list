const dropmenu = () => {
    const menu = document.querySelector('.side-bar');
    const img = document.querySelector('#header-menu');
    const content = document.querySelector('.content');

    img.addEventListener('click', () => {
        if (menu.style.visibility === "hidden") {
            menu.style.visibility = "visible";
            img.classList.add('selected');
            content.classList.remove("big");
        } else {
            menu.style.visibility = "hidden";
            img.classList.remove('selected');
            content.classList.add('big');
        }
    })

}

export default dropmenu;
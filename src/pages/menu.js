console.log('menu page');

export default function startUpMenu(){
    // document.body.appendChild(content());
    const main = document.querySelector('#content');
    main.textContent = 'This is the Menu page'
    function content() {
        const element = document.createElement('div');
        element.id = 'content';
        return element;
    };
}
console.log('about page');

export default function startUpAbout(){
    // document.body.appendChild(content());
    const main = document.querySelector('#content');
    main.textContent = 'This is the about page, check it out'
    function content() {
        const element = document.createElement('div');
        element.id = 'content';
        return element;
    };
}
console.log('gift card page');

export default function startUpGift(){
    // document.body.appendChild(content());
    const main = document.querySelector('#content');
    main.textContent = 'This is the Gift Cards page, check it out'
    function content() {
        const element = document.createElement('div');
        element.id = 'content';
        return element;
    };
}
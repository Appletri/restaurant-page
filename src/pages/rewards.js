console.log('rewards page');

export default function startUpRewards(){
    // document.body.appendChild(content());
    const main = document.querySelector('#content');
    main.textContent = 'This is the Rewards page, check it out'
    function content() {
        const element = document.createElement('div');
        element.id = 'content';
        return element;
    };
}
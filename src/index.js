import './style.css';
import startUpAbout from './pages/about.js';
import startUpMenu from './pages/menu.js';
import startUpRewards from './pages/rewards.js';
import startUpGift from './pages/gift-cards';

init();

function init() {
    document.body.appendChild(navBar());
    const nav = document.querySelector('.nav-bar');
    nav.appendChild(navItem('About'));
    nav.appendChild(navItem('Menu'));
    nav.appendChild(navItem('Rewards'));
    nav.appendChild(navItem('Gift Cards'));
    document.body.appendChild(content());
    const main = document.querySelector('#content');
    main.appendChild(title('My Restaurant'));


    function navBar() {
        const element = document.createElement('nav');
        element.classList.add('nav-bar');
        return element;
    }

    function navItem(name) {
        const element = document.createElement('div');
        element.textContent = name;
        element.classList.add('nav-item');
        element.addEventListener('click', toPage);
        return element;
    };
    
    function title(name) {
        const element = document.createElement('h1');
        element.textContent = name;
        element.classList.add('title');
        return element;
    };

    function content() {
        const element = document.createElement('div');
        element.id = 'content';
        return element;
    };
    
    function toPage(e) {
       console.log (e.target.textContent);
       
        if(e.target.textContent == 'About'){      
            startUpAbout();
        }
        else if (e.target.textContent == 'Menu'){
            startUpMenu();
        }
        else if (e.target.textContent == 'Rewards'){
            startUpRewards();
        }
        else if (e.target.textContent == 'Gift Cards'){
            startUpGift();
        };
    };


};



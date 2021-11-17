import './style.css';
import startUpAbout from './pages/about.js';
import startUpMenu from './pages/menu.js';
import startUpRewards from './pages/rewards.js';
import startUpGift from './pages/gift-cards';
import Icon from './images/starbucks-logo-png-transparent.png';

init();

function init() {
    document.body.appendChild(navBar('nav-bar'));
    const nav = document.querySelector('.nav-bar');
    nav.appendChild(navBar('nav-left'));
    nav.appendChild(navBar('nav-right'));
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    navLeft.appendChild(navLogo());
    navLeft.appendChild(navItem('Menu'));
    navLeft.appendChild(navItem('Rewards'));
    navLeft.appendChild(navItem('Gift Cards'));
    navRight.appendChild(addButton('Sign in'));
    navRight.appendChild(addButton('Join now'));
    document.body.appendChild(content());
    const main = document.querySelector('#content');
    startUpRewards();
    footer();


    function footer() {
        const foot = document.createElement('footer');
        const line = document.createElement('hr');
        document.body.appendChild(line);
        document.body.appendChild(foot);
        foot.textContent = 'This is a practice restaurant page for the Odin Project by Tri Lam'
    }

    function navBar(name) {
        const element = document.createElement('nav');
        element.classList.add(name);
        return element;
    }

    function navLogo() {
        const element = document.createElement('div');
        const logo = new Image();
        logo.src = Icon;
        element.appendChild(logo);
        element.className = ('nav-item home');
        element.addEventListener('click', toPage);
        return element;
    };

    function addButton(name) {
        const element = document.createElement('button');
        element.textContent = name;
        return element;
    };

    function navItem(name) {
        const element = document.createElement('div');
        element.textContent = name;
        element.classList.add('nav-item');
        element.addEventListener('click', toPage);
        return element;
    };

    function content() {
        const element = document.createElement('div');
        element.id = 'content';
        return element;
    };
    
    function toPage(e) {
       console.log (e.target.textContent);
       main.innerHTML = '';

        if(e.target.textContent == ''){      
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



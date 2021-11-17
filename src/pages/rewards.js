import {addText , addContainer} from '../function.js';

export default function startUpRewards(){
    addContainer(1,'mainRewards',document.querySelector('#content'))
    addContainer(4,'rewards',document.querySelector('.mainRewards1'));
    const rewards1 = document.querySelector('.rewards1');
    addContainer(1,'box',rewards1);
    addText(3,'R1text',document.querySelector('.box1'));
    document.querySelector('.R1text1').textContent = 'FREE COFFEE IS A TAP AWAY';
    document.querySelector('.R1text2').textContent = 'Join now to start earning Rewards';
    document.querySelector('.R1text3').textContent = 'Or join in the app for the best experience';
    const hero = new Image();
    hero.src = 'https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png';
    rewards1.appendChild(hero);
}
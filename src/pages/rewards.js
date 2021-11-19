import {addText , addContainer, addStep} from '../function.js';

export default function startUpRewards(){
    const stepTitle = ['Create an account','Order and pay how you’d like','Earn Stars, get Rewards'];
    const stepInstr = ['To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.','Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how','As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!'];

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

    addContainer(2,'R2box',document.querySelector('.rewards2'));
    addText(2,'R2text',document.querySelector('.R2box1'));
    document.querySelector('.R2text1').textContent = 'Getting started is easy';
    document.querySelector('.R2text2').textContent = 'Earn Stars and get rewarded in a few easy steps';
    addStep(3,false,stepTitle,stepInstr,document.querySelector(`.R2box2`));
    
}
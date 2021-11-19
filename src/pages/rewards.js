import {addText , addContainer, addStep} from '../function.js';

export default function startUpRewards(){
    const stepTitle = ['Create an account','Order and pay how you’d like','Earn Stars, get Rewards'];
    const stepInstr = ['To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.','Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how','As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!'];
    const stepTitle2 = ['Fun freebies', 'Order & pay ahead', 'Get to free faster'];
    const stepInstr2 = ['Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.','Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.','Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.'];
    const stepImg = ['https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg', 'https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg','https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg']
    const rankTitle = ['Customize your drink'];
    const rankInstr = ['Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.'];
    const rankImg = ['https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png']


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

    addContainer(2,'R3box',document.querySelector('.rewards3'));
    addText(1,'R3text',document.querySelector('.R3box1'));
    document.querySelector('.R3text1').textContent = 'Get your favorites for free';
    addContainer(1,'R3box1',document.querySelector('.R3box1'));
    addText(5,'R3text2',document.querySelector('.R3box11'));
    document.querySelector('.R3text21').innerHTML = '25<span style="color:gold; font-size:16px">★</span>';
    document.querySelector('.R3text22').innerHTML  = '50<span style="color:gold; font-size:16px">★</span>';
    document.querySelector('.R3text23').innerHTML  = '150<span style="color:gold; font-size:16px">★</span>';
    document.querySelector('.R3text24').innerHTML  = '200<span style="color:gold; font-size:16px">★</span>';
    document.querySelector('.R3text25').innerHTML  = '400<span style="color:gold; font-size:16px">★</span>';
    addStep(1,true,rankTitle,rankInstr,document.querySelector(`.R3box2`),rankImg,'rank-img');

    addContainer(2,'R4box',document.querySelector('.rewards4'));
    addText(2,'R4text',document.querySelector('.R4box1'));
    document.querySelector('.R4text1').textContent = 'Endless Extras';
    document.querySelector('.R4text2').textContent = 'Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.';
    addStep(3,true,stepTitle2,stepInstr2,document.querySelector(`.R4box2`),stepImg,'stepIcon');
    
}
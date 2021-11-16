import {addText , addContainer, addIconLabel} from '../function.js';

export default function startUpMenu(){
    const all = ['Drinks','Hot Coffees','Hot Teas','Hot Drinks','Frappuccino Blended Beverages','Cold Coffees','Iced Teas','Cold Drinks','Food','Hot Breakfast','Bakery','Lunch','Snacks & Sweets','Oatmeal & Yogurt','At Home Coffee','Whole Bean','VIA Instant','Merchandise','Cold Cups','Tumblers','Water Bottles','Other'];
    const drinks = ['Hot Coffees','Hot Teas','Hot Drinks','Frappuccino Blended Beverages','Cold Coffees','Iced Teas','Cold Drinks'];
    const food = ['Hot Breakfast','Bakery','Lunch','Snacks & Sweets','Oatmeal & Yogurt'];
    const atHomeCoffee = ['Whole Bean','VIA Instant'];
    const merchandise = ['Cold Cups','Tumblers','Water Bottles','Other'];
    const header = ['Drinks','Food','At Home Coffee','Merchandise'];
    const drinksImg = ['https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg','https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg','https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg','https://globalassets.starbucks.com/assets/d50938db081948b8a23c81070a300ad8.jpg','https://globalassets.starbucks.com/assets/3abfc4b26c144afd9dd4eec001f0f252.jpg','https://globalassets.starbucks.com/assets/de6d02e888c74eac9f6ea19c5492b8e8.jpg','https://globalassets.starbucks.com/assets/77334c4087314c518f842c2f77cfaec1.jpg'];
    const foodImg = ['https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg','https://globalassets.starbucks.com/assets/738d89c837874a4ab31044808764b6fb.jpg', 'https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg', 'https://globalassets.starbucks.com/assets/60622ad125344b8184b80fed745dc1f6.jpg', 'https://globalassets.starbucks.com/assets/b0e0112505884457ad3f3af0ba17f6c7.jpg'];
    const atHomeCoffeeImg = ['https://globalassets.starbucks.com/assets/a327bf1877f34f29854c8298b91bcf0a.jpg','https://globalassets.starbucks.com/assets/ea966427c0cd46038be7a5181089fb0f.jpg'];
    const merchandiseImg = ['https://globalassets.starbucks.com/assets/d85a6ec4d5be46e9a3a4bc6031573fda.jpg','https://globalassets.starbucks.com/assets/b7a99a58163043eeae6d92ead70bbea3.jpg','https://globalassets.starbucks.com/assets/1d60dfa15cb34919b8a6a7c3d1703eb8.jpg','https://globalassets.starbucks.com/assets/75252b10ad4f45debf9cff3de9029663.jpg'];
    addContainer(1,'menuBoard', document.querySelector('#content'));
    addContainer(2,'menu', document.querySelector('.menuBoard1'));

    addText(22,'type', document.querySelector('.menu1'));
    for (let i=0; i<all.length; i++){
        document.querySelector(`.type${i+1}`).textContent = all[i];
    };

    addContainer(4,'icon-category', document.querySelector('.menu2'));
    // document.querySelector('icon-category1').textContent = 'Menu';
    // document.querySelector('icon-category2').textContent = 'Drinks';
    
    addIconLabel(document.querySelector('.icon-category1'), drinks, drinksImg);
    addIconLabel(document.querySelector('.icon-category2'), food, foodImg);
    addIconLabel(document.querySelector('.icon-category3'), atHomeCoffee, atHomeCoffeeImg);
    addIconLabel(document.querySelector('.icon-category4'), merchandise, merchandiseImg);
    AddHeader();

    function AddHeader(){
        for(let i=1;i<=4;i++){
            const element = document.createElement('div');
            element.className = 'sectionHead';
            const text = document.createElement('h2');
            text.textContent = header[i-1];
            const hr = document.createElement('hr');
            element.appendChild(text);
            element.appendChild(hr);
            document.querySelector('.menu2').insertBefore(element, document.querySelector(`.icon-category${i}`));
        }
        const head = document.createElement('h1');
        head.textContent = 'Menu';
        document.querySelector('.menu2').insertBefore(head, document.querySelector('.sectionHead'));
    };

}
import {addText , addContainer, addIconLabel} from '../function.js';

export default function startUpMenu(){
    const type = ['Drinks','Hot Coffees','Hot Teas','Hot Drinks','Frappuccino Blended Beverages','Cold Coffees','Iced Teas','Cold Drinks','Food','Hot Breakfast','Bakery','Lunch','Snacks & Sweets','Oatmean & Yogurt','At Home Coffee','Whole Bean','VIA Instant','Merchandise','Cold Cups','Tumblers','Water Bottles','Other']
    addContainer(1,'menuBoard', document.querySelector('#content'))
    addContainer(2,'menu', document.querySelector('.menuBoard1'));

    addText(22,'type', document.querySelector('.menu1'));
    for (let i=0; i<type.length; i++){
        document.querySelector(`.type${i+1}`).textContent = type[i];
    }
    addContainer(5,'icon-category', document.querySelector('.menuBoard2'));
    document.querySelector('icon-category1').textContent = 'Menu';
    document.querySelector('icon-category2').textContent = 'Drinks';
    
    addIconLabel(22, 'picture', document.querySelector('icon-category2'), type);

}
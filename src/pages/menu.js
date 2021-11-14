import {addText , addContainer} from '../function.js';

export default function startUpMenu(){
    addContainer(1,'menuBoard', document.querySelector('#content'))
    addContainer(2,'menu', document.querySelector('.menuBoard1'));
    addText(22,'type', document.querySelector('.menu1'));
    document.querySelector('.type1').textContent =  'Drinks';
    document.querySelector('.type2').textContent =  'Hot Coffees';
    document.querySelector('.type3').textContent =  'Hot Teas';
    document.querySelector('.type4').textContent =  'Hot Drinks';
    document.querySelector('.type5').textContent =  'Frappuccino Blended Beverages';
    document.querySelector('.type6').textContent =  'Cold Coffees';
    document.querySelector('.type7').textContent =  'Iced Teas';
    document.querySelector('.type8').textContent =  'Cold Drinks';
    document.querySelector('.type9').textContent =  'Food';
    document.querySelector('.type10').textContent =  'Hot Breakfast';
    document.querySelector('.type11').textContent =  'Bakery';
    document.querySelector('.type12').textContent =  'Lunch';
    document.querySelector('.type13').textContent =  'Snacks & Sweets';
    document.querySelector('.type14').textContent =  'Oatmean & Yogurt';
    document.querySelector('.type15').textContent =  'At Home Coffee';
    document.querySelector('.type16').textContent =  'Whole Bean';
    document.querySelector('.type17').textContent =  'VIA Instant';
    document.querySelector('.type18').textContent =  'Merchandise';
    document.querySelector('.type19').textContent =  'Cold Cups';
    document.querySelector('.type20').textContent =  'Tumblers';
    document.querySelector('.type21').textContent =  'Water Bottles';
    document.querySelector('.type22').textContent =  'Other';
}
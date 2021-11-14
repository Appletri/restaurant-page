import {addText , addContainer} from '../function.js';
import seasonDrinks from '../images/137-74956.png';
import latte from "../images/137-74957.png";

export default function startUpAbout(){

    addContainer(3,'container', document.querySelector('#content'));
    addContainer(1, 'firstTextBlock', document.querySelector('.container1'));
    addText(2,'text', document.querySelector('.firstTextBlock1'));
    document.querySelector('.text1').textContent =  'Jingle all the way to free favorites';
    document.querySelector('.text2').textContent =  'Join Starbucks Rewards for delicious deals & exclusive offers.';

    const cont2 = document.querySelector('.container2');
    const drinks = new Image();
    drinks.src = seasonDrinks;
    cont2.appendChild(drinks);
    addContainer(1, 'childTextBlock', cont2);
    addText(2,'fav-text',document.querySelector('.childTextBlock1'));
    document.querySelector('.fav-text1').textContent =  'Your faves are back';
    document.querySelector('.fav-text2').textContent =  'Come celebrate the season with our merry holiday drinks: Peppermint Mocha, Caramel Brulée Latte and Toasted White Chocolate Mocha. Cheers!';

    const cont3 = document.querySelector('.container3');
    addContainer(1, 'childTextBlockA', cont3);
    addText(2,'new-text',document.querySelector('.childTextBlockA1'));
    document.querySelector('.new-text1').textContent =  `NEW TO THE NICE LIST`;
    document.querySelector('.new-text2').textContent =  'For a nondairy twist on a holiday cookie classic, try the new Iced Sugar Cookie Almondmilk Latte.';
    const almondLatte = new Image();
    almondLatte.src = latte;
    cont3.appendChild(almondLatte);

};
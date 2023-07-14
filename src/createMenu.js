import salmon from './images/salmon.jpg';
import meatballs from './images/meatballs.jpg';
import moose from './images/moose.jpg';
import shrimp from './images/shrimp.jpg';
import soup from './images/soup.jpg';

export default function createMenu(){
    //create div
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Menu";
    const menuItem1 = document.createElement('div');
    const pic1 = new Image();
    pic1.src = salmon;
    menuItem1.appendChild(pic1);
    const item1p1 = document.createElement('p');
    item1p1.innerHTML = 'Sous vide gravlax';
    const item1p2 = document.createElement('p');
    item1p2.innerHTML = 'Cured, smoked salmon finished off with a blowtorch';
    const price = document.createElement('p');
    price.innerHTML = "$25"
    menuItem1.appendChild(item1p1);
    menuItem1.appendChild(item1p2);
    menuItem1.appendChild(price);

    const menuItem2 = document.createElement('div');
    const pic2 = new Image();
    pic2.src = meatballs;
    menuItem2.appendChild(pic2);
    const item2p1 = document.createElement('p');
    item2p1.innerHTML = 'Sweedish Meatballs';
    const item2p2 = document.createElement('p');
    item2p2.innerHTML = 'Classic sweedish meatballs served with fries';
    const price2 = document.createElement('p');
    price2.innerHTML = "$19"
    menuItem2.appendChild(item2p1);
    menuItem2.appendChild(item2p2);
    menuItem2.appendChild(price2);


    const menuItem3 = document.createElement('div');
    const pic3 = new Image();
    pic3.src = moose;
    menuItem3.appendChild(pic3);
    const item3p1 = document.createElement('p');
    item3p1.innerHTML = 'Wild Moose';
    const item3p2 = document.createElement('p');
    item3p2.innerHTML = 'Swedish moose filet with lingonberries';
    const price3 = document.createElement('p');
    price3.innerHTML = "$23";
    menuItem3.appendChild(item3p1);
    menuItem3.appendChild(item3p2);
    menuItem3.appendChild(price3);


    const menuItem4 = document.createElement('div');
    const pic4 = new Image();
    pic4.src = shrimp;
    menuItem4.appendChild(pic4);
    const item4p1 = document.createElement('p');
    item4p1.innerHTML = 'Shrimp Salad';
    const item4p2 = document.createElement('p');
    item4p2.innerHTML = 'Red onion, salad shrimp, cucumber topped with our award winning house dressing';
    const price4 = document.createElement('p');
    price4.innerHTML = "$15"
    menuItem4.appendChild(item4p1);
    menuItem4.appendChild(item4p2);
    menuItem4.appendChild(price4);


    const menuItem5 = document.createElement('div');
    const pic5 = new Image();
    pic5.src = soup;
    menuItem5.appendChild(pic5);
    const item5p1 = document.createElement('p');
    item5p1.innerHTML = 'Finnish Salmon Soup';
    const item5p2 = document.createElement('p');
    item5p2.innerHTML = 'Nordic salmon chowder with salmon fillet and a light cream broth';
    const price5 = document.createElement('p');
    price5.innerHTML = "$12"
    menuItem5.appendChild(item5p1);
    menuItem5.appendChild(item5p2);
    menuItem5.appendChild(price5);


    menu.appendChild(h1);
    menu.appendChild(menuItem1);
   
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);
    menu.appendChild(menuItem5);

    return menu

}
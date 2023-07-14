export default function createNav(){
    const nav = document.createElement('nav');
    const list = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.innerHTML =' <button>Home</button>';
    item1.setAttribute('id','home');
    const item2 = document.createElement('li');
    item2.innerHTML =' <button>Menu</button>';
    item2.setAttribute('id','menu');
    const item3 = document.createElement('li');
    item3.innerHTML =' <button>Contact</button>';
    item3.setAttribute('id','contact');
    nav.appendChild(item1);
    nav.appendChild(item2);
    nav.appendChild(item3);
    return nav
}
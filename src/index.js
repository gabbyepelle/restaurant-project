import createHome from "./createHome.js";
import createNav from "./createNav.js";
import "./styles.css";
import createMenu from "./createMenu.js";
import createContact from './createContact.js';
import clearPage  from "./clearPage.js";

const content = document.querySelector('#content');
const pageLoader = function(){
        content.appendChild(createNav());
        eventHandler()
        content.appendChild(createHome());
}

const eventHandler = function(){
    const home = document.querySelector('#home');
        home.addEventListener('click', function(){
        clearPage(content);
        pageLoader();
        eventHandler();
        })
    
        const menu = document.querySelector('#menu');
        menu.addEventListener('click', function(){
            clearPage(content);
            content.appendChild(createNav());
            eventHandler();
            content.appendChild(createMenu());

        const contact = document.querySelector('#contact');
        contact.addEventListener('click', ()=>{
               clearPage(content);
               content.appendChild(createNav());
               eventHandler();
               content.appendChild(createContact());
            })
            
         })
}

 pageLoader()
 















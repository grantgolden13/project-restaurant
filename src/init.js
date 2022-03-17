import './style.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

function init() {
    const header = document.querySelector('header');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const btn = document.createElement('button');

    h1.textContent = "Ristorante Mezzocorona";
    header.appendChild(h1);
    h2.textContent = "A bustling pizzeria in the heart of Mezzocorona, Italy";
    header.appendChild(h2);

    const homeBtn = btn;
    homeBtn.textContent = "Home";
    homeBtn.type = "button";
    const homeLi = li.appendChild(homeBtn);
    ul.appendChild(homeLi);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.type = "button";
    const menuLi = li.appendChild(menuBtn);
    ul.appendChild(menuLi);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.type = "button";
    const contactLi = li.appendChild(contactBtn);
    ul.appendChild(contactLi);

    nav.appendChild(ul);
    header.appendChild(nav);
    
    const navBtns = [...document.querySelectorAll('button')];
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // remove content
            
            const content = [...document.getElementById('content').children];
            content.forEach(child => child.remove());

            // generate content based on which btn was clicked

            const id = e.target.textContent.toString().toLowerCase();
            if ( id === "home" ) {
                document.appendChild(home());
            } else if ( id === "menu" ) {
                document.appendChild(menu());
            } else if ( id === "contact" ) {
                document.appendChild(contact());
            }

        });
    });

    document.appendChild(home());
}

export { init }
import chef from './chef.jpeg';
import pizza from './pizza.jpeg';

const pizzaImg = new Image();  
pizzaImg.src = pizza;

function home() {

    const content = document.getElementById('content');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const div = document.createElement('div');
    const chefImg = new Image();
    
    h1.textContent = "Ristorante Mezzocorona";
    content.appendChild(h1);
    h2.textContent = "A bustling pizzeria in the heart of Mezzocorona, Italy";
    content.appendChild(h2);

    p.textContent = "The best ristorante in all of Italy - homemade food created with passion since 1869.  Come try our wide variety of pizzas, pastas, antipasti, calzones, strombolis, cannolis, and more.";
    content.appendChild(p);

    chefImg.src = chef;
    chefImg.classList.add('img');
    div.appendChild(chefImg);
    content.appendChild(div);

    p1.textContent = "On the corner of Via delle Lega and Strada Provinciale 29.  Visit us any time, we're open 24 hours a day, 365 days a year."
    content.appendChild(p1);

}

export { home };


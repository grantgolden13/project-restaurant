import chef from './chef.jpeg';

function home() {

    const content = document.getElementById('content');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    
    const chefImg = new Image();
    chefImg.src = chef;

    p.textContent = "The best ristorante in all of Italy - homemade food created with passion since 1869.  Come try our wide variety of pizzas, pastas, antipasti, calzones, strombolis, cannolis, and more.";
    content.appendChild(p);

    chefImg.classList.add('img');
    div.appendChild(chefImg);
    content.appendChild(div);

    p1.textContent = "On the corner of Via delle Lega and Strada Provinciale 29.  Visit us any time, we're open 24 hours a day, 365 days a year."
    content.appendChild(p1);

}


export { home };


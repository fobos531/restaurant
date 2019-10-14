import contact from './contact';
import menu from './menu';
function initialPageLoad() {
    function setAttributes(el, attrs) {
        for(let key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }
    let content = document.querySelector('div#content');
    content.innerHTML = "";

    let el = document.createElement('h1');
    el.textContent = "Magnifico Ristorante";
    content.appendChild(el);

    let moreinfo = document.createElement('div');
    moreinfo.setAttribute('id', 'moreinfo');
    content.appendChild(moreinfo);

    el = document.createElement('img');
    setAttributes(el, {
        "src": "./assets/background.jpg",
        "alt": "an image of a restaurant"
    });
    moreinfo.appendChild(el);

    let buttons = document.querySelector('buttons');
    if (!buttons) {
        buttons = document.createElement('div');
        buttons.setAttribute('id', 'buttons');
        moreinfo.appendChild(buttons);

        let btn = document.createElement('button');
        btn.innerText = "Home";
        btn.setAttribute('id', 'home');
        buttons.appendChild(btn);

        btn = document.createElement('button');
        btn.innerText = "Contact";
        btn.setAttribute('id', 'contact');
        buttons.appendChild(btn);

        btn = document.createElement('button');
        btn.innerText = "Menu";
        btn.setAttribute('id', 'menu');
        buttons.appendChild(btn);
    }
    moreinfo.appendChild(buttons);


    el = document.createElement('p');
    el.innerText = "Magnifico Ristorante is seeking experienced multi-unit franchisees to acquire and develop select locations and cities around the world in shopping districts, airports, colleges and more. We bring strong financials and a culture that brings our customers to stores from Greenwich Village to Dubai. We will negotiate development agreements starting at a minimum of three locations. Being a great Franchise Partner requires a combination of business acumen, good judgement and perseverance. We are looking for people with a passion for business, matched by their desire to deliver the highest-quality customer service and, most importantly, a commitment to hospitality. A focus on delivering the Magnifico Ristorante experience and creating unforgettable moments is a necessity.";
    moreinfo.appendChild(el);

    let home = document.getElementById('home');
    let contactButton = document.getElementById('contact');
    let menuButton = document.getElementById('menu');

    home.addEventListener('click', initialPageLoad);
    contactButton.addEventListener('click', contact);
    menuButton.addEventListener('click', menu);
}

export default initialPageLoad;
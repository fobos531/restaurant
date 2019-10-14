import contact from './contact';
import initialPageLoad from './initialPageLoad';

function menu() {
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
//
    let paragraph = document.createElement('p');
    paragraph.innerHTML = "<ul><li>Pizza</li><li>Sushi</li><li>Something</li></ul>";
    moreinfo.appendChild(paragraph);

    let home = document.getElementById('home');
    let contactButton = document.getElementById('contact');
    let menu = document.getElementById('menu');

    home.addEventListener('click', initialPageLoad);
    contactButton.addEventListener('click', contact);
    menu.addEventListener('click', menu);
}

export default menu;
import initialPageLoad from './initialPageLoad';
import menu from './menu';

function contact() {
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

    let container = document.createElement('div');
    container.classList.add('container');
    moreinfo.appendChild(container);

    let form = document.createElement('form');
    form.setAttribute('action', '#');
    moreinfo.appendChild(form);

    let label = document.createElement('label');
    label.setAttribute('for', 'fname');
    label.innerText = "First name";
    form.appendChild(label);

    let input = document.createElement('input');
    setAttributes(input, {
        "type":"text",
        "id":"fname",
        "name":"firstname",
        "placeholder": "Your name goes here"
    })
    form.appendChild(input);

    label = document.createElement('label');
    label.setAttribute('for', 'lname');
    label.innerText = "Last Name";
    form.appendChild(label);

    input = document.createElement('input');
    setAttributes(input, {
        "type":"text",
        "id":"lname",
        "name":"lastname",
        "placeholder": "Your surname goes here"
    })
    form.appendChild(input);

    label = document.createElement('label');
    label.setAttribute('for', 'email');
    label.innerText = "E-Mail";
    form.appendChild(label);

    input = document.createElement('input');
    setAttributes(input, {
        "type":"text",
        "id":"email",
        "name":"email",
        "placeholder": "Your e-mail goes here"
    })
    form.appendChild(input);

    label = document.createElement('label');
    label.setAttribute('for', 'subject');
    label.innerText = "Subject";
    form.appendChild(label);

    let textarea = document.createElement('textarea');
    setAttributes(textarea, {
        "id": "subject",
        "name": "subject",
        "placeholder": "Your message to us goes here",
        "style": "height:200px"
    })
    form.appendChild(textarea);

    input = document.createElement("input");
    setAttributes(input, {
        "type": "submit",
        "value": "Submit"
    })
    form.appendChild(input);

    let home = document.getElementById('home');
    let contactButton = document.getElementById('contact');
    let menuButton = document.getElementById('menu');

    home.addEventListener('click', initialPageLoad);
    contactButton.addEventListener('click', contact);
    menuButton.addEventListener('click', menu);

}

export default contact;
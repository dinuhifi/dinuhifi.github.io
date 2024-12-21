const app = document.getElementById('app');
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener('keypress', async function(e) {
    if(e.key === 'Enter') {
        await delay(150);
        getInputValue();

        removeInput();
        await delay(150);
        new_line();
    }
});

app.addEventListener('click', function(e) {
    const input = document.querySelector('input');
    input.focus();
});

async function terminal_startup() {
    createText("Welcome to dinesh's Portfolio");
    await delay(1000);
    createText("Starting the server...");
    await delay(1700);
    createText("Server Online!");
    await delay(150);
    createText("Type 'help' to see all available commands");

    await delay(800);
    new_line();
}

function new_line() {
    const p = document.createElement('p');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    p.setAttribute('class', 'path');
    p.textContent = '# guest';
    span1.textContent = ' @';
    span2.textContent = ' ~/dinuhifi';
    p.appendChild(span1);
    p.appendChild(span2);   
    app.appendChild(p);
    const div = document.createElement('div');
    div.setAttribute('class', 'type');
    const i = document.createElement('i');
    i.setAttribute('class', 'fas fa-angle-right icone');
    const input = document.createElement('input');
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
}

function removeInput() {
    const div = document.querySelector('.type');
    app.removeChild(div);
}

async function getInputValue() {
    const value = document.querySelector('input').value;
    if(value === 'help') {
        trueValue(value);

        createText("Available commands:");
        createCode("help", "Show all available commands");
        createCode("clear", "Clear the terminal");
        createCode("about", "About me");
        createCode("contact", "Contact me");
    }


    // Add more commands here
    else if(value === 'clear') {
        document.querySelectorAll('p').forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll('section').forEach(e => e.parentNode.removeChild(e));
    }
    else {
        falseValue(value);
        createText(`Command '${value}' not found`);
    }
}

function trueValue(value) {
    const div = document.createElement('section');
    div.setAttribute('class', 'type2');
    const i = document.createElement('i');
    i.setAttribute('class', 'fas fa-angle-right icone');
    const message = document.createElement('h2');
    message.setAttribute('class', 'success');
    message.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(message);
    app.appendChild(div);
}

function falseValue(value) {
    const div = document.createElement('section');
    div.setAttribute('class', 'type2');
    const i = document.createElement('i');
    i.setAttribute('class', 'fas fa-angle-right icone error');
    const message = document.createElement('h2');
    message.setAttribute('class', 'error');
    message.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(message);
    app.appendChild(div);
}

function createText(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    app.appendChild(p);
}

function createCode(command, description) {
    const p = document.createElement('p');
    p.setAttribute('class', 'code');
    p.innerHTML = `${command} - <span class='text'> ${description}</span>`;
    app.appendChild(p);
}

terminal_startup();
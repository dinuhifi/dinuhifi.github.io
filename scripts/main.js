const app = document.getElementById('app');
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener('keypress', async function(e) {
    if (e.key === 'Enter') {
        await delay(150);
        await getInputValue();

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
    const value = document.querySelector('input').value.trim();
    if (value === 'help') {
        trueValue(value);

        createText("Available commands:");
        createCode("help", "Show all available commands");
        createCode("clear", "Clear the terminal");
        createCode("about", "About me");
        createCode("projects", "View my projects");
        createCode("contact", "Contact me");
        createCode("resume", "View my resume");

    } else if (value === 'about') {
        trueValue(value);
        createText("Fetching Information...");
        await delay(1000);

        createCode("Name", "Dinesh Kumar CP");
        createCode("Education", "B.Tech in Artificial Intelligence and Data Science - Shiv Nadar University, Chennai");
        createCode("Location", "Chennai, India");
        createCode("Technical Skills", "Python, Java, C/C++, SQL, scikit-learn, tensorflow, Keras, React, JavaScript, HTML, CSS");
        createCode("Interests", "Software Development, AI, Machine Learning, Data Science");
        createCode("Hobbies", "Coding, Cricket, Scrolling through social media");
        createText("I love to explore new technologies and work on challenging projects. You're invited to explore this terminal as well — who knows what you'll discover along the way.");

    } else if (value === 'contact') {
        trueValue(value);
        createText("Fetching Information...");
        await delay(1000);

        createLink("Email", "mailto:dinuhifi@gmail.com");
        createLink("LinkedIn", "https://www.linkedin.com/in/dinesh-kumar-cp/");
        createLink("GitHub", "https://github.com/dinuhifi");

    } else if (value === 'projects') {
        trueValue(value);
        createText("Fetching projects...");
        await delay(1000);

        createCode("IntelliGrade: AI Powered Automatic Grading System built for teachers/educational institutions.", "Full Stack Application built using React, FastAPI, and Supabase. <a href='https://github.com/dinuhifi/IntelliGrade' target='_blank'>Github Repo</a>");
        createCode("CurioScope: An Interactive AI Educational Assistant", "A Streamlit based web application that provides personalized learning experiences using AI. <a href='https://github.com/dinuhifi/Curioscope-main' target='_blank'>Github Repo</a>");
        createCode("Ping Pong AI: An AI powered ping pong simulation.", "A ping pong game simulated with 2 AI's playing against each other. Built with Python and Pygame, powered by reinforcement learning algorithms. <a href='https://github.com/dinuhifi/PingPongAI' target='_blank'>Github Repo</a>");
        createCode("Terminal Portfolio", "This very website! Built with vanilla HTML, CSS and JavaScript. <a href='https://github.com/dinuhifi/dinuhifi.github.io' target='_blank'>Github Repo</a>");
        createText("For more details/projects, check out my <a href='https://github.com/dinuhifi' target='_blank'>GitHub</a>.");

    } else if (value === 'resume') {
        trueValue(value);
        createText("Opening resume...");
        await delay(1000);
        
        window.open('resume.pdf', '_blank');
        createText("You can download my resume <a href='resume.pdf' target='_blank'>here</a>.");

    } else if (value === 'pwd') {
        trueValue(value);
        createText("/home/dinuhifi");

    } else if (value === 'sudo rm -rf') {
        trueValue(value);
        createText("Ha! Nice try! Find the hidden password to unlock the privileges.");

    } else if (value === 'sudo rm -rf dinuhifi') {
        trueValue(value);
        createText("Access Granted! 🕵️‍♂️");
        await delay(500);
        createText("Just kidding... But you found the secret command. Well done!");

    } else if (value === 'clear') {
        document.querySelectorAll('p').forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll('section').forEach(e => e.parentNode.removeChild(e));
        
    } else {
        falseValue(value);
        createText(`Command '${value}' not found. Type 'help' to see all available commands`);
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

function createText(text, isHTML = true) {
    const p = document.createElement('p');
    if (isHTML) {
        p.innerHTML = text;
    } else {
        p.textContent = text;
    }
    app.appendChild(p);
}

function createCode(command, description) {
    const p = document.createElement('p');
    p.setAttribute('class', 'code');
    p.innerHTML = `${command} - <span class='text'> ${description}</span>`;
    app.appendChild(p);
}

function createLink(label, url) {
    const p = document.createElement('p');
    p.innerHTML = `${label} - <a href="${url}" target="_blank">${url}</a>`;
    app.appendChild(p);
}

terminal_startup();
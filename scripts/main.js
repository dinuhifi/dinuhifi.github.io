const app = document.getElementById('app');
const delay = ms => new Promise(res => setTimeout(res, ms));

const commandHistory = [];
let historyIndex = -1;

app.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        await delay(150);
        await getInputValue();

        await delay(150);
        new_line();
    }
});

app.addEventListener('click', function (e) {
    const input = document.querySelector('input');
    input.focus();
});

const commands = ['ls', 'clear', 'about', 'experience', 'certifications', 'projects', 'contact', 'resume', 'pwd'];

app.addEventListener('keydown', function (e) {
    const input = document.querySelector('input');
    if (!input) return;
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[commandHistory.length - 1 - historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[commandHistory.length - 1 - historyIndex];
        } else {
            historyIndex = -1;
            input.value = '';
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        const partial = input.value.trim();
        if (!partial) return;
        const matches = commands.filter(cmd => cmd.startsWith(partial));
        if (matches.length === 1) {
            input.value = matches[0];
        } else if (matches.length > 1) {
            // Complete to longest common prefix
            let prefix = matches[0];
            for (const match of matches) {
                while (!match.startsWith(prefix)) {
                    prefix = prefix.slice(0, -1);
                }
            }
            input.value = prefix;
            createText(matches.join('&nbsp;&nbsp;&nbsp;'));
        }
    }
});

async function terminal_startup() {
    createText("Welcome to dinesh's Portfolio");
    await delay(1000);
    createText("Starting the server...");
    await delay(1700);
    createText("Server Online!");
    await delay(150);
    createText("Type 'ls' to see all available commands");

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
    if (value) {
        commandHistory.push(value);
        historyIndex = -1;
    }
    if (value === 'ls') {
        trueValue(value);

        createText("Available commands:");
        createCode("ls", "List all available commands");
        createCode("clear", "Clear the terminal");
        createCode("about", "About me");
        createCode("experience", "My work experience");
        createCode("certifications", "My certifications");
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

        createLink("Email", "mailto:dinuhifi@gmail.com", "dinuhifi@gmail.com");
        createLink("LinkedIn", "https://www.linkedin.com/in/dinesh-kumar-cp/", "linkedin.com/in/dinesh-kumar-cp");
        createLink("GitHub", "https://github.com/dinuhifi", "github.com/dinuhifi");

    } else if (value === 'projects') {
        trueValue(value);
        createText("Fetching projects...");
        await delay(1000);

        createCode("IntelliGrade: AI Powered Automatic Grading System.", "Full Stack Application built using React, FastAPI, and Supabase. <a href='https://github.com/dinuhifi/IntelliGrade' target='_blank'>Github Repo</a>");
        createCode("CurioScope: An Interactive AI Educational Assistant", "A Streamlit based web application that provides personalized learning experiences using AI. <a href='https://github.com/dinuhifi/Curioscope-main' target='_blank'>Github Repo</a>");
        createCode("Ping Pong AI: An AI powered ping pong simulation.", "A ping pong game simulated with 2 AI's playing against each other. Built with Python and Pygame, powered by reinforcement learning algorithms. <a href='https://github.com/dinuhifi/ping-pong-ai' target='_blank'>Github Repo</a>");
        createCode("Terminal Portfolio", "This very website! Built with vanilla HTML, CSS and JavaScript. <a href='https://github.com/dinuhifi/dinuhifi.github.io' target='_blank'>Github Repo</a>");
        createText("For more details/projects, check out my <a href='https://github.com/dinuhifi' target='_blank'>GitHub</a>.");

    } else if (value === 'resume') {
        trueValue(value);
        createText("You can download my resume <a href='resume.pdf'>here</a>.");

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

    } else if (value === 'experience') {
        trueValue(value);
        createText("Fetching experience...");
        await delay(1000);

        createCode("Summer Intern · HSBC Technology India", "June 2026 – July 2026 · Developed a custom MCP-integrated multi-agent workflow. Built a React-based internal tool POC. Gained first-hand exposure to enterprise engineering practices and corporate tech culture.");

    } else if (value === 'certifications') {
        trueValue(value);
        createText("Fetching certifications...");
        await delay(1000);

        createCode("Machine Learning Specialization", "Stanford University &amp; DeepLearning.AI · Coursera · June 2024");
        createCode("TensorFlow Developer Bootcamp", "Udemy · August 2024");

    } else if (value === 'clear') {
        freezeInput('success');
        document.querySelectorAll('p, section, .type-frozen').forEach(e => e.parentNode.removeChild(e));

    } else {
        falseValue(value);
        createText(`Command '${value}' not found. Type 'ls' to see all available commands`);
    }
}

function freezeInput(colorClass) {
    const div = document.querySelector('.type');
    if (!div) return;
    const input = div.querySelector('input');
    if (!input) return;
    const span = document.createElement('span');
    span.textContent = input.value.trim();
    span.className = colorClass;
    div.replaceChild(span, input);
    div.classList.remove('type');
    div.classList.add('type-frozen');
}

function trueValue(value) {
    freezeInput('success');
}

function falseValue(value) {
    freezeInput('error');
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

function createLink(label, url, displayText = url) {
    const p = document.createElement('p');
    p.innerHTML = `${label} - <a href="${url}" target="_blank">${displayText}</a>`;
    app.appendChild(p);
}

terminal_startup();
import { initializeBracketButtons } from './common.js';

document.addEventListener("DOMContentLoaded", includeHTML);

// navbar 초기화
document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");
    const promises = [];

    includes.forEach(el => {
        const url = el.getAttribute("data-include");
        if (url) {
            promises.push(
                fetch(url)
                    .then(response => response.text())
                    .then(data => (el.outerHTML = data))
            );
        }
    });

    Promise.all(promises).then(() => {
        initializeNavbar();
    });
});

// brackets btn 초기화
document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");

    includes.forEach(el => {
        const url = el.getAttribute("data-include");
        if (url) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    el.innerHTML = data;

                    if (url.includes("brackets.html")) {
                        initializeBracketButtons();
                    }
                })
                .catch(err => console.error("Error loading include:", err));
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    initializeBracketButtons();
});


function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(async (el) => {
        const file = el.getAttribute("data-include");
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const content = await response.text();
                    el.innerHTML = content;
                } else {
                    console.error(`Error loading ${file}: ${response.status}`);
                }
            } catch (error) {
                console.error(`Error loading ${file}:`, error);
            }
        }
    });
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const container = document.querySelector(':root');

darkModeToggle.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
});
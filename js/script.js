const container = document.querySelector(':root');
const darkMode = document.getElementById('dark-mode-toggle');
let isMoved = false;

darkMode.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
    
    if (!isMoved) {
        darkMode.style.left = '2.7vw';
        darkMode.style.backgroundImage = "url('image/icons-sun.png')";

    } else {
        darkMode.style.left = '7.3vw'; 
        darkMode.style.backgroundImage = "url('image/icons-moon.png')";
    }
    isMoved = !isMoved; 
});
// moveMoon.addEventListener('click', (event) => {
//     const offsetX = event.clientX - event.target.offsetLeft;
//     const offsetY = event.clientY - event.target.offsetTop;
    
//     moveMoon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
// });
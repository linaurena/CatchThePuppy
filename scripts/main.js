const startScreen = document.getElementById('start-screen');
const btnStart = document.getElementById('start');

window.addEventListener("load", function() {
    startScreen.classList.add("active");
});

btnStart.addEventListener("click", function(){
    startScreen.classList.remove("active");
});
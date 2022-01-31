const menu = document.querySelector('.menu')
const nav = document.querySelector('.navbar');
const li = document.querySelector('.li')
console.log(li);
menu.addEventListener("click", bknav)
let item = true;
function bknav() {
    nav.classList.toggle('active')
    if (item) {
        menu.innerHTML = `<i class="fas fa-times"></i>`
        item = false;
    } else {
        menu.innerHTML = `<i class="fas fa-bars"></i>`
        item = true;
    }
}

li.addEventListener("click", bk);
console.log(nav.firstElementChild.firstElementChild.firstElementChild.textContent);
function bk(e){
    if (nav.firstElementChild.firstElementChild.firstElementChild.textContent=='home') {
        nav.style.transForm = " translateX(0)";
        console.log(e.target);
}
}
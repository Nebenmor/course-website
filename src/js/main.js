const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})

const year = document.getElementById("year");
const currentYear = new Date().getFullYear();

year.innerHTML = currentYear;
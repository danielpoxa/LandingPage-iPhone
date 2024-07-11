  /*Função de mudar o celular*/
  function imgSlider(e){
    const phone = document.querySelector('#phone');
    phone.src = e;
}
function circleChange(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

// Script para o botão hamburger
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Fechar o menu ao clicar em um item
const navItems = document.querySelectorAll('.nav-list li a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});

// Função para scroll para o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar/esconder botão de voltar ao topo
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
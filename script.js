//alert("Em Desenvolvimento !");

//funções para ao clickar no menu ir para o link de forma suave
const menuItems = document.querySelectorAll("#header a");

menuItems.forEach(item => {
    item.addEventListener("click", scroollToIdOnClick);
})

function scroollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 100;
    scrollToPosition(to)
}

function getScrollTopByHref(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    });   
}

//fim da função

//menu mobile

const btnMobile = document.getElementById("btn-mobile");
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

//fim menu mobile
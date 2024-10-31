const d = document;

function menu(iconos,navUl,iconoAbrir,iconoCerrar) {
    d.addEventListener("click", (e)=> {
        if(e.target.matches(`${iconos} *`)) {
            d.querySelector(navUl).classList.toggle('activo');
            d.querySelector(iconoAbrir).classList.toggle('activo');
            d.querySelector(iconoCerrar).classList.toggle('activo');
        }
    });
}

menu('.iconos', '.nav-ul', '.icono-abrir', '.icono-cerrar')
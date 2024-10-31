function irArriba() {
    window.addEventListener("scroll", (e)=>{
        let scroll = document.documentElement.scrollTop;
        let botonArriba = document.querySelector('.boton')
        let enlace = document.querySelector('.enlace i')
        if(botonArriba || enlace){
            if(scroll >= 819) {
                botonArriba.classList.add('activo')
            } else{
                botonArriba.classList.remove('activo')
            }
        }
    })
}
irArriba()
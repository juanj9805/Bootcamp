

const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener( 'click' , () =>{
    sidebar.classList.toggle("close");
} )

searchBtn.addEventListener( 'click', () => {
    sidebar.classList.remove("close");
} )

modeSwitch.addEventListener('click', ()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode"
    }
    else
    {
        modeText.innerText = "Dark mode"
    }

})

//desarrollo bootcamp

//Declarar variables

let menuHamburguesa = document.getElementById("menuHamburguesa")
let parteDerecha = document.getElementById("parteDerecha")
let estadoBoton = 0;

menuHamburguesa.addEventListener("click", function(){
/*     alert("hola compas");
 */    estadoBoton++; // Incrementa el estado en 1 (cambia de par a impar o viceversa)
    actualizarEstado();
});

function actualizarEstado() {
    if (estadoBoton % 2 === 0) {
        parteDerecha.style.width="92%";

        // Realiza acciones correspondientes al estado par
    } else {
        parteDerecha.style.width="77.5%";

        // Realiza acciones correspondientes al estado impar
    }
}



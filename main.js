

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
        imglogo__bt.style.display="none"
    } )


   

/* searchBtn.addEventListener('click', () => {
    sidebar.classList.remove("close");
    imglogo__bt.style.display = "none";
}); */


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
let imglogo__bt = document.getElementById("logo__bt")


menuHamburguesa.addEventListener("click", function(){
/*     alert("hola compas");
 */    estadoBoton++; // Incrementa el estado en 1 (cambia de par a impar o viceversa)
    actualizarEstado();
});

function actualizarEstado() {
    if (estadoBoton % 2 === 0) {
        parteDerecha.style.width="92%";
        imglogo__bt.style.display="none";

        // Realiza acciones correspondientes al estado par
    } else {
        parteDerecha.style.width="77.5%";
        imglogo__bt.style.display="block";

        // Realiza acciones correspondientes al estado impar
    }
}



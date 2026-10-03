/* =========================
   MENÚ PARA CELULAR
   ========================= */

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


menuBtn.addEventListener("click", function () {

    menu.classList.toggle("mostrar");

});


/* =========================
   INFORMACIÓN DE ASTRONOMÍA
   ========================= */

const informacion = {

    planetas: {

        titulo: "Planetas",

        texto:
        "Los planetas son cuerpos celestes que orbitan alrededor de una estrella. En nuestro Sistema Solar existen ocho planetas."
    },


    estrellas: {

        titulo: "Estrellas",

        texto:
        "Las estrellas son enormes esferas de gas muy caliente. En su interior ocurren procesos que producen grandes cantidades de energía y luz."
    },


    galaxias: {

        titulo: "Galaxias",

        texto:
        "Las galaxias son enormes estructuras formadas por estrellas, planetas, gas, polvo y materia oscura."
    }

};


/* =========================
   MODAL
   ========================= */

const modal = document.getElementById("modal");

const tituloModal = document.getElementById("tituloModal");

const textoModal = document.getElementById("textoModal");


function mostrarInfo(tipo) {

    tituloModal.textContent =
        informacion[tipo].titulo;


    textoModal.textContent =
        informacion[tipo].texto;


    modal.classList.add("activo");

}


/* =========================
   CERRAR MODAL
   ========================= */

function cerrarModal() {

    modal.classList.remove("activo");

}


/* Cerrar al hacer clic fuera */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        cerrarModal();

    }

});


/* =========================
   DATOS CÓSMICOS
   ========================= */

const datos = [

    "La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en llegar a la Tierra.",

    "Un día en Venus dura más que un año venusiano.",

    "Saturno tiene una densidad media menor que la del agua.",

    "La Tierra gira sobre su eje y también orbita alrededor del Sol.",

    "La Vía Láctea es la galaxia donde se encuentra nuestro Sistema Solar."

];


function datoCosmico() {

    const numero =
        Math.floor(Math.random() * datos.length);


    document.getElementById("dato").textContent =
        "✦ " + datos[numero];

}


/* =========================
   CURIOSIDADES
   ========================= */

function mostrarPregunta(elemento) {

    elemento.classList.toggle("activa");

}
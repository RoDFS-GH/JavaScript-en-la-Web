/*
//selecciono el data del botón del formulario
const btn = document.querySelector ("[data-form-btn]");

console.log(btn);

//cuando el uasuario haga click necesitamos que alguien nos escuche (listener) y que ese realice una acción (función)
//arrow functions o funciones anonimas
//recibimos el evento que se está generando (evento)
btn.addEventListener ("click", (evento) =>{
    //impedir que se refresque la pagina
    evento.preventDefault();
    //selecciono el data del input del formulario
    const input = document.querySelector ("[data-form-input]");
    //con input.value selecciono el contenido del input
    console.log("input.value");
})*/

const btn = document.querySelector ("[data-form-btn]");

const createTask = (evento) =>{
    
    evento.preventDefault();
    const input = document.querySelector ("[data-form-input]");
        console.log("input.value");
}

console.log(btn);

btn.addEventListener ("click", createTask);

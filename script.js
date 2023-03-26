import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

/*
//cuando el uasuario haga click necesitamos que alguien nos escuche (listener) y que ese realice una acción (función)
//arrow functions o funciones anonimas
//recibimos el evento que se está generando (evento)
btn.addEventListener ("click", (evento) =>{
    //impedir que se refresque la pagina
    evento.preventDefault();
    //selecciono el data del input del formulario
    const input = document.querySelector ("[data-form-input]");
   
})*/


  //selecciono el data del botón del formulario
  const btn = document.querySelector('[data-form-btn]');
  //recibo un evento en createTask
  const createTask = (evento) => {
    evento.preventDefault();
    //constante para seleccionar el input:
    const input = document.querySelector('[data-form-input]');
    //con input.value selecciono el contenido del input
    const value = input.value;
    const list = document.querySelector('[data-list]');
    //constante para seleccionar la ul del html:
    //const task = document.querySelector('[data-task]');
    //reemplazo lo anterior por la constante para crear la lista de cada tarea porque borré lo que estaba dentro del ul (div, i, span):
    const task = document.createElement('li');
    //agrego la clase card a cada tarea:
    task.classList.add('card');
    //pongo en blanco el input:
    input.value = '';
    //backticks
    //Voy a agregar el contenido del input
      /*const content = `<div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span></div>
      <i class="fas fa-trash-alt trashIcon icon"></i>`;*/
      //creo dos constantes para el div y el span
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    //agrego la clase task:
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
    // task.innerHTML = content;
    task.appendChild(taskContent);
    //llamo al elemento padre para que el elemento eliminar se coloque en su lugar
    task.appendChild(deleteIcon());
    //al elemento lista (padre) quiero agregar una tarea (hijo)
    //agrego toda la tarea anterior al elemento lista (padre:lista/hijo:tarea):
    list.appendChild(task);
  };

  //Arrow functions o funciones anonimas
  //agrego con el click una tarea vacía por ahora
  btn.addEventListener('click', createTask);
  
  
  
   
  
 





  
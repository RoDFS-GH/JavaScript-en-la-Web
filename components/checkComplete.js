//reemplaza las clases de html en el elemento i
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
  };
  // Immediately invoked function expression IIFE
  const completeTask = (event) => {
    //accedo al elemento i con target  
    const element = event.target;
    //la función togle verifica si existe o no existe la clase
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
  };

  export default checkComplete;
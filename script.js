const itemForm = document.getElementById('item-form');
const itemList = document.getElementById("item-list");

//FUNCIONES A IMPLEMENTAR

//recoge la información de localStorage
function recogerTareasStorage(){
    //get de el array de localStorage
    let arrayStorage = localStorage.getItem('items');
    return arrayStorage;
}

//muestra tareas en pantalla
function mostrarTareas(){
    //recorrer el array de localStorage y pasarlo a escribirPantalla
    //por cada elemento que hay en arrayStorage
    //llamo a escribirPantalla y le paso el elemento (tarea)
    escribirPantalla();
}

//escribe en pantalla
// function escribirPantalla(){
//     //los  valores recibidos añadir hijo (<li>) al <ul>
//    // <UL>.ADDCHILD(<LI>);
// }

//recoge información del formulario
function recogerDatosFormulario(evento){
    evento.preventDefault();

    //1- Aquí recoger los valores de la tarea, la fecha y prioridad
    //1.1- recoger en variables los datos: 
          // tareas= <id="item-input">.value
          const tareas = document.getElementById("item-input").value;
          // fecha = <id="fecha">.value
          let fecha = document.getElementById('fecha').value;
          const parts = fecha.split('-');
          fecha = parts[2] + '/' + parts[1] + '/' + parts[0];
          // prioridad = <id="priority">.value
          const prioridad = document.getElementById('priority').value;

          console.log(tareas, fecha, prioridad);
    //2- Escribir en la pantalla dentro de un <li> hijo de <ul> tarea, fecha y la prioridad
    //2.1 - Construir el elemento <li>  
        const li = document.createElement('li');
    
    //2.2 - Añadir al li tarea
    //2.3 - Añadir al li fecha
    //2.4 - Añadir al li prioridad
        let tareaCompleta = fecha + ' - ' + tareas + ' - ' + prioridad;
        li.appendChild(document.createTextNode(tareaCompleta));

    //2.5 - Añadir al li boton con la x
    //      2.5.1 crear boton
        const boton = document.createElement('button');
        boton.classList.add('btn-link', 'text-red', 'remove-item');
    //      2.5.2 crear icono x
        const icono = document.createElement('i');
        icono.className = 'fa-solid fa-xmark';
    //      2.5.3 añadir icono al boton 
        boton.appendChild(icono);
        li.appendChild(boton);
    //2.6 - < id="item-list">.AddChild(li)
        itemList.appendChild(li);
   
    //3 - Escribir en localStorage
    //3.1 - Traer la información de localStorage
    // 3.1.1 - localStorage.getItem() y almacenar en array
    //3.2 - Hacer push de los datos en el array
    //3.3 - Guardar la información en localStorage
    //  3.3.1 localStorage.setItem()

   //escribirPantalla();
    //escribirLocalStorage();
}

//guarda información en localStorage
function escribirLocalStorage(){
    //aquí recoger el array y hacer push
}

//eliminar todas las tareas de la pantalla
function eliminarTareasPantalla(){
    //aquí recorrer todos los <li> y eliminarlos
}

//eliminar todas las tareas de localStorage
function eliminarTodasLocalStorage(){
    //aquí hacer clear en localStorage
}

//eliminar una tarea de la pantalla
function eliminarTareaPantalla(){
    //aquí código eliminar el <li> "clickado"
}

//eliminar una tarea de localStorage
function eliminarTareaLocalStorage(){
    //aquí código para eliminar el <li> seleccionado
}

//recoger tareas de la pantalla
function recogerTareasPantalla(){
    //aquí código recoger las tareas del <ul>
}

//ordenar por fecha
function ordenarPorFecha(){

    recogerTareasPantalla();
    //aquí código para ordenar por fecha
    escribirPantalla();
}

//ordenar por prioridad
function ordenarPorPrioridad(){

    recogerTareasPantalla();
    //aquí código para ordenar por prioridad
    escribirPantalla();
}

itemForm.addEventListener('submit', recogerDatosFormulario);

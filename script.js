
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
function escribirPantalla(){
    //los  valores recibidos añadir hijo (<li>) al <ul>
}

//recoge información del formulario
function recogerDatosFormulario(){

    //aquí recoger los valores de los inputs
    escribirPantalla();
    escribirLocalStorage();
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


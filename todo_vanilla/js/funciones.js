const tareas=document.querySelector(".tarea");
const formulario=document.querySelector("form");
const inputTexto=document.querySelector(`form input[type="text"]`)

formulario.addEventListener("submit",evento =>{
    evento.defaultPrevented();

    if(inputTexto.value.trim() != ""){
        new Tarea(1,inputTexto.value.trim(),false,tareas);
        inputTexto.value ="";
    }
});

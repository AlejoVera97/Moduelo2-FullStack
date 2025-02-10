class Tarea{
    constructor(id,texto,estado,contenedor){
        this.id =id;
        this.texto=texto;
        this.DOM=null;
        this.crearTarea(estado,contenedor);
    }
    crearTarea(estado,contenedor){
        this.DOM =document.createElement("div");
        this.DOM.classList.add("tarea");
        
        let textoTarea= document.createElement("h2");
        textoTarea.classList.add("visible");
        textoTarea.innerText=this.texto;

        let editorTarea=document.createElement("input");
        editorTarea.setAttribute("type","text");
        editorTarea.value = this.texto;

        let botonEditar=document.createElement("button");
        botonEditar.classList.add("boton");
        botonEditar.innerText="editrar";
 
        let botonBorrar=document.createElement("button");
        botonBorrar.classList.add("boton");
        botonBorrar.innerText="borrar";

        botonBorrar.addEventListener("click", ()=>{
            
            //this.borrarTarea();
        });

        let botonEstado = document.createElement("button");
        botonEstado.className= `estado ${ estado ? "terminada" : ""}`;
        botonEstado.appendChild(document.createElement("span"));

        this.DOM.appendChild(textoTarea);
        this.DOM.appendChild(editorTarea);
        this.DOM.appendChild(botonEditar);
        this.DOM.appendChild(botonBorrar);
        this.DOM.appendChild(botonEstado);
        contenedor.appendChild(this.DOM);
    }

    borrarTarea(){
        this.DOM.remove();
    }
}
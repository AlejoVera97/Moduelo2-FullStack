class Tarea{
    constructor(id,texto,estado,contenedor){
        this.id =id;
        this.texto=texto;
        this.DOM=null;
        this.editando = false;
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
        botonEditar.innerText="editar";

        botonEditar.addEventListener("click",()=>this.actulizarEstado());
 
        let botonBorrar=document.createElement("button");
        botonBorrar.classList.add("boton");
        botonBorrar.innerText="borrar";

        botonBorrar.addEventListener("click", ()=>{
            this.borrarTarea();
        });

        let botonEstado = document.createElement("button");
        botonEstado.className= `estado ${ estado ? "terminada" : ""}`;
        botonEstado.appendChild(document.createElement("span"));

        botonEstado.addEventListener("click",()=>{
            this.actulizarEstado()
            .then(()=>botonEstado.classList.toggle("terminada"));
        });

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

    actulizarEstado(){
        return new Promise((ok,ko)=>{
            ok();
        });
    }
    actulizarTexto(){
        if(this.editando){
            let textoTemporal= this.DOM.children[1].value.trim();
            
            if(textoTemporal!= "" && textoTemporal != this.texto){
                this.texto = textoTemporal;
            }

            this.DOM.children[1].classList.remove("visible");
            this.DOM.children[0].innerText=this.texto;
            this.DOM.children[0].classList.add("visible");
            this.DOM.children[2].innerText = "editar";
        }else{
            this.DOM.children[0].classList.remove("visible");
            this.DOM.children[1].value=this.texto;
            this.DOM.children[1].classList.add("visible");
            this.DOM.children[2].innerText = "guardar";
        }
        this.editando= !this.editando;
    }
}
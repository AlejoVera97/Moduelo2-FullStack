const contenedor = document.querySelector("ul");
const parrafoError = document.querySelector(".error")
const formulario = document.querySelector("form");
const input = document.querySelector(`form input[type="text"]`);

function li({ id, r, g, b }) {
    let item = document.createElement("li");
    let valor = [r, g, b].join(",");
    item.innerText = valor;
    item.style.backgroundColor = `rgb(${valor})`


    item.addEventListener("click", () => {
        item.innerText = "borrando...";

        fetch(`/borrar-color/${id}`, {
            method: "DELETE"
        })
            .then(respuesta => {
                if (respuesta.status == 204) {
                    return item.remove();
                }
                item.innerText = valor;
                parrafoError.innerText="ha ocurrido un error";
                parrafoError.classList.add("visible");

            });

        
    });

fetch("/colores")
            .then(respuesta => {
                return new Promise((ok, ko) => {
                    if (respuesta.status == 500) {
                        return ko();
                    }
                    respuesta.json()
                        .then(colores => ok(colores))
                });

            })
            .then(colores => {
                colores.forEach(color => contenedor.appendChild(li(color)))
                    .catch(() => {
                        parrafoError.innerText = "ha ocurrido un error";
                        parrafoError.classList.add("visible");
                    })
            });

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        parrafoError.classList.remove("visible");
        if (/^([0-9]{1,3},){2}[0-9]{1,3}$/.test(input.value)) {
            let valores = input.value.split(",").map(n => Number(n));
            let valido = true;
            let i = 0;

            while (valido && i < 3) {
                valido = valores[i] <= 255;
                i++;
            }

            if (valido) {

                let [r, g, b] = valores;

                return fetch("/crear-color", {
                    method: "POST",
                    body: JSON.stringify({ r, g, b }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(respuesta => respuesta.json())
                    .then(({ id, error }) => {
                        if (!error) {
                            contenedor.appendChild(li({ id, r, g, b }));
                            return input.value = "";
                        }
                        parrafoError.innerText = " ha ocurrido un error";
                        parrafoError.classList.add("visible");
                    });
            }
        }


        parrafoError.innerText = " debe escribir tres numeros entre 0 y 255 separados por coma";
        parrafoError.classList.add("visible");

    });
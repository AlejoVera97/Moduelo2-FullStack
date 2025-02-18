const contenedor = document.querySelector("ul");
const error = document.querySelector(".error")

function li({ id, r, g, b }) {
    let item = document.createElement("li");
    let valor = [r, g, b].join(",");
    item.innerText = valor;
    item.style.backgroundColor = `rgb(${valor})`
    return item;
}

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
                error.innerText = "ha ocurrido un error";
                error.classList.add("visible");
            })
    });
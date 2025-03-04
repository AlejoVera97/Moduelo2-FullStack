const color = document.querySelector(".color");
const controles = document.querySelectorAll("input");
let valores=[0,0,0];

controles.forEach(control => {
    control.addEventListener("input", () => {
        valores[i] = control.value;
        color.style.backgroundColor=`rgb(${valores.join(",")})` 
    });
});
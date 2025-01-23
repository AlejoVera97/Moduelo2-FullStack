const titulo= document.querySelector("h1");

function color(){
    return `rbg(${[0,0,0].map(()=> Math.floor(Math.random()*256)).join(",")})`;
}

titulo.innerHTML = titulo.innerText.split("").map(caracter =>{
    return caracter == " "? caracter:`<span style="color:${color()};>${caracter}</span>`;
}).join("");
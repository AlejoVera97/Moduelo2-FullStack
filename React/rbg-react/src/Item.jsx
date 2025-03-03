function Item ({r,g,b}){
    
    return <li style={{ backgroundColor: `rgb(${[r, g, b].join(",")})` }}>{r},{g},{b}</li>;
}
export default Item
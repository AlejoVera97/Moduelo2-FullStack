import { useState } from "react";
import Uno from "./uno";
import Dos from "./dos";
import Contexto from "./contexto";

function Principal() {
    let [estado, setEstado] = useState(false)

    return <Contexto.Provider value={{ estado, setEstado }}>
        <Uno />
        <Dos />
    </Contexto.Provider>
}

export default Principal
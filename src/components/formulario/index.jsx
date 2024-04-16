import { useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)

    const Resultado = () =>{
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3
        if (media >= 7) {
            return(
                <p>Você esta aprovado</p>
            )
        }else{
            return(
                <p>Você esta reprovado</p>
            )
        }
    }
    return (
        <form>
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {Resultado()}
        </form>
    )
}

export default Formulario
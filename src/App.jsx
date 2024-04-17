import { useState } from "react"
import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <div className="container">
      <div className="input"> 
        <input className="inputUsuario" type="text" placeholder="Digite um usuario" onBlur={e => setNomeUsuario(e.target.value)} />
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

    </div>
  )
}

export default App

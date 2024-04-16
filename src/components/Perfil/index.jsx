import './perfil.css'
const Perfil = () => {
    const usuario = {
        nome: 'julio',
        avatar: 'https://github.com/JulioVieiraP.png'
    }
    return (
        <>
            <img className='perfil__avatar' src={usuario.avatar} />
            <h3 className='perfil__txt'>{usuario.nome}</h3>
        </>
    )
}

export default Perfil
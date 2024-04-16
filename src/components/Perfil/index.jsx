import './perfil.css'
const Perfil = ({ nome, avatar }) => {
    return (
        <>
            <img className='perfil__avatar' src={avatar} />
            <h3 className='perfil__txt'>{nome}</h3>
        </>
    )
}

export default Perfil
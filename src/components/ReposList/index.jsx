import { useEffect, useState } from "react"

import styles from './Repos.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setcarregando] = useState(true)
    const [deuError, setDeuError] = useState(false)

    const fetchData = async () => {
        try {
            setcarregando(true);
            const res = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`);
            if (!res.ok) {
                throw new Error("Usuário não encontrado");
            }
            const resJson = await res.json();
            setTimeout(() => {
                setcarregando(false);
                setRepos(resJson);
            }, 3000);
        } catch (e) {
            setcarregando(false);
            setDeuError(true);
            console.error("Erro ao carregar repositórios: ", e.message);
        }
    };

    useEffect(() => {
        setcarregando(true)
        fetchData()
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : deuError ? (
                <p className={styles.msgError}>Erro ao carregar Repositórios. Verifique o nome do usuário.</p>

            ) : (
                <ul className={styles.list}>
                    {repos.map(item => (

                        <li className={styles.listItem} key={item.id}>
                            <div>
                                <b>Nome: {item.name}</b>
                            </div>
                            <div>
                                <b>language: {item.language}</b>
                            </div>
                            <a className={styles.ItemLink} target="_black" href={item.html_url}>Visite no github</a>
                        </li>

                    ))
                    }
                </ul >
            )
            }
        </div>
    )
}

export default ReposList

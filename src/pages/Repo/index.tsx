import React, { useEffect, useState } from 'react';
import { Header, Wrapper, Title } from './styles';
import { Link, useMatch } from 'react-router-dom'
import logo from '../../assets/perfil-amarelo.png';
import { api } from '../../services/api';


export const Repo: React.FC = () => {
    const match = useMatch(':repository/*');
    console.log(match)

    const [repositories, setRepositories] = useState<Array<any>>()

    useEffect(() => {
        const getAllRepositories = async (param: any) => {
            const request: any = await api.get(`/${param}`)
            setRepositories(request.data)
        }

        getAllRepositories(match?.params.repository)
    }, [match?.params.repository])

    return (
        <>
        <Header>
            <div className='logo'>
            <img src={logo} alt="GitColleciton" />
            <h1>Catálogo de Repositórios</h1>
            </div>
            <Link to="/">Voltar</Link>
        </Header>
        <Wrapper>
            <Title>Detalhamento de Repositórios</Title>
            {
                repositories?.map(item => (
                    <div key={item.id}>{item.full_name}</div>
                ))
            }
        </Wrapper>
        </>
    )
}

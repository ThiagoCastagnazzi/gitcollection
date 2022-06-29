import React, { useEffect, useState } from 'react';
import { Header, RepoInfo, Title } from './styles';
import { Link, useMatch } from 'react-router-dom'
import logo from '../../assets/perfil-amarelo.png';
import { api } from '../../services/api';


export const Repo: React.FC = () => {
    const match = useMatch(`/:repository/*`);
    console.log(match)
    const [repositories, setRepositories] = useState<Array<any>>();
    console.log(repositories)

    useEffect(() => {
        const getAllRepositories = async (params: any) => {
            const request: any = await api.get(`repos/${params}`);
            setRepositories(request.data);
            console.log(request.data)
        }

        getAllRepositories(match?.params?.repository);
    },[match?.params?.repository])

    return (
        <>
        <Header>
            <div className='logo'>
            <img src={logo} alt="GitColleciton" />
            <h1>Catálogo de Repositórios</h1>
            </div>
            <Link to="/">Voltar</Link>
        </Header>
        <Title>Detalhamento de Repositórios</Title>
        <RepoInfo>
            <div className='repo-stats'>
            <div>
                <img src="" alt="Thiago Dev" />
                <div className='repo-description'>
                    <strong>ThiagoCastagnazzi/bikcraft</strong>
                    <p>Repositório do site Bikcraft</p>
                </div>
            </div>
            <ul>
                <li><strong>2330</strong><span>Stars</span></li>
                <li><strong>210</strong><span>Froks</span></li>
                <li><strong>79</strong><span>Issue Abertas</span></li>
            </ul>
            </div>
            
        </RepoInfo>
        </>
    )
}

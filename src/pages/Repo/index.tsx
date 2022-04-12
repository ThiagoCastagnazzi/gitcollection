import React from 'react';
import { Header, Wrapper, Title } from './styles';
import { Link } from 'react-router-dom'
import logo from '../../assets/perfil-amarelo.png';


export const Repo: React.FC = () => {
    // const repo = useParams<{repository: string}>().repository;
    return (
        <>
        <Header>
            {/* <h1>Repo: {repo}</h1> */}
            <div className='logo'>
            <img src={logo} alt="GitColleciton" />
            <h1>Catálogo de Repositórios</h1>
            </div>
            <Link to="/">Voltar</Link>
        </Header>
        <Wrapper>
            <Title>Detalhamento de Repositórios</Title>
        </Wrapper>
        </>
    )
}

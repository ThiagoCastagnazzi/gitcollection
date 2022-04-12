import React from 'react';
import { Link } from 'react-router-dom'

import {api} from '../../services/api';
import {Header, Logo, Title, Form, Repos, Wrapper, Error} from './style';
import logo from '../../assets/perfil-amarelo.png';

interface GithubRepository{
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
}
}
export const Dashboard: React.FC = () => {
    const [repos, setRepos] = React.useState<GithubRepository[]>(() =>{
        const storageRepos = localStorage.getItem('@GitCollection:repositories');

        return storageRepos === null ? [] : JSON.parse(storageRepos);
    });
    const [newRepo, setNewRepo] = React.useState('');
    const [inputError, setInputError] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos));
    }, [repos])

    function handleInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
        setNewRepo(event.target.value);
    }

    async function handleAddRepo (event: React.FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();

        if (!newRepo){
            setInputError('Usuário e/ou Repositório Inválido');
            return;
        } 

        const response = await api.get<GithubRepository>(`repos/${newRepo}`);
        const repository = response.data;
        setRepos([...repos, repository]);
        setNewRepo('');
    }


    return (
    <>
    <Header>
        <div className='logo'>
        <a href="/"><Logo><img src={logo} alt='gitcolletions' /></Logo></a>
        <h1>Catálogo de Repositórios</h1>
        </div>
        </Header>
    <Wrapper>
        <Title>GitColletions Repositórios</Title>
        <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
                    <input placeholder='username/repository_name' onChange={handleInputChange} />
                    <button type='submit'>Buscar</button>
                    {inputError && <Error>{inputError}</Error>}
        </Form>
        
        <Repos>
            {repos.map
                (repository =>
                    (
                        <Link to={`/repositories/${repository.full_name}`} key={repository.full_name}>
                            <img src={repository.owner.avatar_url} 
                                 alt={repository.owner.login} />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                        </Link>
                    )
                )
            }
        </Repos>
    </Wrapper>
    </>
    )
}

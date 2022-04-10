import React from 'react';

import {api} from '../../services/api';
import {Header, Logo, Title, Form, Repos, Wrapper, Div} from './style';
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
    const [repos, setRepos] = React.useState<GithubRepository[]>([]);
    const [newRepo, setNewRepo] = React.useState('');

    function handleInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
        setNewRepo(event.target.value);
    }

    async function handleAddRepo (event: React.FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();
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
        <div>
                <Form onSubmit={handleAddRepo}>
                    <input placeholder='username/repository_name' onChange={handleInputChange} />
                    <button type='submit'>Buscar</button>
                </Form>
        </div>
        </Header>
    <Wrapper>
        <Title>GitColletions Repositórios</Title>
        <Div>
        <Repos>
            {repos.map
                (repository =>
                    (
                        <a href='/repositores' key={repository.full_name}>
                            <img src={repository.owner.avatar_url} 
                                 alt={repository.owner.login} />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                        </a>
                    )
                )
            }
        </Repos>
        </Div>
        </Wrapper>
    </>
    )
}

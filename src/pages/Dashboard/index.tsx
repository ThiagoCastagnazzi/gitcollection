import React from 'react';

import {Title, Form, Wrapper} from './style';
import logo from '../../assets/logo.svg';
export const Dashboard: React.FC = () => {
    return (
    <>
    <Wrapper>
        <img src={logo} alt='gitcolletions' />
        <Title>Catálogo de Repositórios do Github</Title>
        <Form>
            <input placeholder='username/repository_name' />
            <button type='submit'>Buscar</button>
        </Form>
        </Wrapper>
    </>
    )
}

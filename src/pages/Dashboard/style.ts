import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps{
  hasError: boolean;
}

export const Header = styled.header`

  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
  }
`

export const Logo = styled.div`
width: 100px;
  img{
    display: block;
    width: 100%;
    border-radius: 50%;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-top: 20px;
`

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 0 auto;
`

export const Form = styled.form<FormProps>`
  display: flex;
  position: relative;
  margin: 0 auto;
  gap: 1rem;
  min-width: 600px;
  padding: 20px 20px 30px 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  justify-content: space-between;

  input {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    outline: none;

    ${props => props.hasError && css
      `border-color: #c53030;`}

    &:hover {
      border-color: #999;
    }
  }

  button {
    padding: 10px;
    border: 0;
    border-radius: 5px;
    background-color: #9A18C9;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    align-self: center;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#9A18C9')};
    }
  }
`

export const Error = styled.span`
  position: absolute;
  bottom: 5px;
  color: #c53030;
`

export const Repos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  

  a{
    display: flex;
    min-width: 600px;
    background: #fff;
    padding: 20px;
    margin: 0 20px 20px 20px;
    border-radius: 5px;
  
    &:hover{
      outline: 0.2rem solid #FFB923;
    }

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div{
    padding: 0 10px;
    strong{
      font-size: 1.2rem;
      color: #333;
    }
    p{
      font-size: 0.8rem;
      color: #999;
      margin-top: 5px;
    }
  }
}
`


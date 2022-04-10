import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 10px;
  justify-content: space-around;

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
  gap: 3rem;
  max-width: 1440px;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  min-width: 600px;
  padding: 20px;
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

export const Div = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #bbb;
  padding: 20px;
  border-radius: 20px;
`

export const Repos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  

  a{
    display: flex;
    min-width: 600px;
    background: #fff;
    padding: 20px;
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
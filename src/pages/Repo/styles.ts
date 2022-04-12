import styled from 'styled-components';

export const Header = styled.header`
  
  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;
  }

  img{
      max-width: 100px;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: color 0.2s;

    &:hover{
      color: #666;
    }
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
`

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 0 auto;
`
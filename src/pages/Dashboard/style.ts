import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`

export const Wrapper = styled.section`
  display: grid;
  gap: 3rem;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 600px;
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
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Rotas } from './routes';
import { GlobalStyle } from './styles/global';
function App() {
  return (
    <>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
    <GlobalStyle />
    </>
  );
}

export default App;

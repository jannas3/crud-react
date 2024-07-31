// Importe createGlobalStyle corretamente (observe o nome correto da função)
import { createGlobalStyle } from "styled-components";


// Crie estilos globais usando createGlobalStyle
const GlobalStyle = createGlobalStyle`
  /* Estilos globais */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Garante que o padding e a borda não aumentem o tamanho do elemento */
  }

  body {
    width: 100vw; /* 100% da largura da viewport */
    height: 100vh; /* 100% da altura da viewport */
    display: flex;
    justify-content: center;
    align-items: center; /* Centraliza conteúdo verticalmente */
    background-color: #f2f2f2;
    font-family: Arial, sans-serif; /* Define a fonte padrão */
  }
`;

export default GlobalStyle;

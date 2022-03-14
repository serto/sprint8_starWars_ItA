import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 45px;
`;

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #0a0b0b;
    color: white;
  }

  header {
    text-align: center;
    position: relative; 
    padding: 42px 0;
  }

  .logoHead {
    display: inline-block;
    width: 50%;
    max-width: 300px;
    img {
      width: 100%;
    }
  }

`;
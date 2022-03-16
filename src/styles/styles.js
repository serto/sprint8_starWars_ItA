import styled, { createGlobalStyle } from 'styled-components';
const mobile_point = 750;
const mobile = `@media (max-width: ${mobile_point}px)`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 980px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 45px;
`;

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #0a0b0b;
    color: #ccc;
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

  .t-t1 {
    font-size: 2em;
    letter-spacing: 0.03em;
    text-align: center;
    text-transform: uppercase;
  }

`;

export const DetailStyle = createGlobalStyle`

  .detail {

    .linkBack {
      letter-spacing: 0.03em;
      color: #ccc;
      font-size: 0.75em;
      text-transform: uppercase;
      text-decoration: none;
      &:hover {
        color: white;
        text-decoration: none;
      }
    }

    &__imageComp {
      display: flex; 
      flex-direction: row;
      ${mobile} {
        flex-direction: column;
      }
    }

    &__image {
      border-right: 4px solid #9e4f60;
      width: 55%;
      box-sizing: content-box;

      ${mobile} {
        width: 100%;
        border-right: none;
        border-bottom: 4px solid #9e4f60;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    &__info {
      background-color: #2d2d2d;
      box-sizing: border-box;
      padding: 2%;
      width: 45%;
      ${mobile} {
        width: 100%;
      }


      h1 {
        color: #ddd;
        letter-spacing: 0.03em;
        font-size: 1.4em;
        text-transform: uppercase;
      }
      h3 {
        color: #ddd;
        letter-spacing: 0.03em;
        font-size: 0.9em;
        text-transform: uppercase;
      }
      h4 {
        color: #ddd;
        letter-spacing: 0.03em;
        font-size: 0.85em;
      }
    }

    &__props {

      margin-top: 36px;
      column-count: 2;
      padding: 0;

      ${mobile} {
        column-count: 1;
      }

      li {
        color: #ddd;
        list-style-type: none;
        margin-bottom: 12px;
        font-size: 0.8em;

        span {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }

`;
import styled from 'styled-components';

export const ListShipStyle = styled.div`
  display: inline-block;
  background-color: #151515;
  padding: 8px 12px;
  margin: 0 0 18px 0;
  border: 1px solid #aaa;

  h2, h4 {
    font-weight: 200;
  }
  a {
    border: 1px solid yellow;
    display: inline-block;
    width: 100%;
    color: white;
    text-decoration: none;
    &:hover,
    &visited {
      color: white;
      text-decoration: none;
    }
  }
`;
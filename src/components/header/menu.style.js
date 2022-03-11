import styled from 'styled-components';

export const MenuStyle = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 18px 0;

  a {
    display: inline-block;
    padding: 8px 12px;
    color: white;
    text-decoration: none;
    &:hover {
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
  }
`;
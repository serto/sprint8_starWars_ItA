import styled from 'styled-components';

export const MenuStyle = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 18px 0;

  a {
    display: inline-block;
    padding: 8px 12px;
    color:  #ccc;
    text-decoration: none;
    font-weight: bold;

    border-left: 1px solid #ccc;

    &:hover {
      color: white;
      text-decoration: none;
    }

    &:last-child {
      border-right: 1px solid #ccc;
    }
  }
`;
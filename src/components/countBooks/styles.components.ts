import styled from 'styled-components';

export const CountBooksItem = styled('p')`
  font-size: 16px;
  color: #000000;
  
  &:empty{
    display: none;
  }
`;

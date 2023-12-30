import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Header = styled('div')`
  background-color: yellow;
  box-shadow: 0 1px 20px darkseagreen;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderBox = styled('div')`
  max-width: 1366px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  align-items: flex-start;
`;

export const Toolbar = styled('div')`
  flex-grow: 1;
`;

export const TitlePage = styled('h1')`
    font-size: 36px;
  color: green;
  margin: 0;
`;

export const Content = styled('div')`
  max-width: 1366px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  padding: 0 16px;

`;

export const Filter = styled('div')`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;



export const ButtonMore = styled('button')`
  padding: 8px;
  width: 100%;
  margin: 16px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;

  &:hover {
    cursor: pointer;
    border: 1px solid #dddddd;
  }
`;

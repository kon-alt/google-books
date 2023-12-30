import styled from 'styled-components';

interface InputWrapperProps {
    readonly $isFocus: boolean;
}

export const SearchBox = styled('div')`
  display: flex;
`;

export const InputWrapper = styled('div')<InputWrapperProps>`
  ${(props) => ` ${props.$isFocus ? 'outline: 2px solid #0090ff' : 'outline: 1px solid hsl(0, 0%, 80%)'};`}
  border-radius: 4px;
  max-width: 300px;
  width: 100%;
  margin-right: 8px;
  background-color: white;
`;

export const Input = styled('input')`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 10px 0 10px 8px;
  width: 100%;

  &::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled('button')`
  padding: 10px 16px;
  border: none;
  outline: none;
  background-color: green;
  border-radius: 4px;
  opacity: 0.8;
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

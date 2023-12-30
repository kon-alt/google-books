import styled from 'styled-components';
import {StylesConfig} from 'react-select';

export const SelectWrapper = styled('div')`
  max-width: 300px;
  width: 100%;
  
  &:first-of-type{
    margin-right: 8px;
  }
`;

export const Label = styled('label')`
    font-size: 12px;
  color: #000000;
  display: inline-block;
  margin-left: 3px;
  margin-bottom: 8px;
`;

export const selectStyles: StylesConfig = {
    control: (styles, state) => ({...styles, width: '100%'}),
    input: (styles) => ({...styles, outline: 'none'})
};

import React from 'react';
import Select from 'react-select';
import {Option} from '../../store/types';
import {Label, selectStyles, SelectWrapper} from './styles.components';

interface CustomSelectProps {
    options: Option[];
    label: string;
    defaultValue: string;
    handleSelect: (option:Option) => void;
}

export const CustomSelect = ({options,label, defaultValue, handleSelect}:CustomSelectProps) => {
    const defaultV = options.find(i => i.value === defaultValue);
    return (
        <SelectWrapper>
            <Label>{label}</Label>
            <Select
                options={options}
                value={defaultV}
                onChange={(item) => handleSelect(item as Option)}
                styles={selectStyles}/>
        </SelectWrapper>
    );
};

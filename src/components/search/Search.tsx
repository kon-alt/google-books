import React, {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks';
import { SearchBox, InputWrapper, Input, Button } from './styles.components';

interface SearchProps {
    initialValue: string;
    handleSearch: (text: string) => void;
    handleClear: () => void;
    submit: () => void;
}

export const Search = ({handleSearch, submit, handleClear, initialValue}: SearchProps) => {
    const [isFocus, setFocus] = useState<boolean>(false);
    const [value, setValue] = useState<string>(initialValue);
    const {debounceValue} = useDebounce({value, delay: 300});

    useEffect(() => {
        handleSearch(debounceValue);
    }, [debounceValue]);

    return (
        <SearchBox>
            <InputWrapper $isFocus={isFocus}>
                <Input
                    value={value}
                    placeholder={'поиск'}
                    onFocus={() => setFocus(true)}
                    onBlur={() => {
                        setFocus(false);
                        if(value === '') {
                            handleClear();
                        }
                    }}
                    onKeyPress={(event) => {
                        if(event.key === 'Enter') {
                            value.length > 0 ? submit() : handleClear();
                        }
                    }}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
            </InputWrapper>
            <Button onClick={submit}>найти</Button>
        </SearchBox>
    );
};

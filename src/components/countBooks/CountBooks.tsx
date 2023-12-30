import React from 'react';
import {CountBooksItem} from './styles.components';

interface CountBooksProps {
    isFetching: boolean;
    totalItems: number;
}

export const CountBooks = ({isFetching, totalItems}:CountBooksProps) => {
    return  isFetching
            ? <CountBooksItem>загрузка...</CountBooksItem>
            : <CountBooksItem>{totalItems > 0 ? `найдено книг: ${totalItems}` : ''}</CountBooksItem>;
};

import React from 'react';
import {Book} from '../../store/types';
import { CardsList} from './styles.components';
import {CardItem} from './CardItem';


interface CardsProps {
    cards: Book[] | undefined;
}

export const Cards = ({cards}: CardsProps) => {

    if (!cards) {
        return <></>;
    }

    return (
        <CardsList>
            {cards.map((i, index) => <CardItem key={`${i.id}-${index}`} card={i} />)}
        </CardsList>
    );
};



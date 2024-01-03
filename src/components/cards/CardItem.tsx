import React from 'react';
import {Book} from '../../store/types';
import {Author, Authors, Card, Category, Image, Title, Tooltip} from './styles.components';
const defaultImage = require('../../assets/images/defaul.png');

export const CardItem = ({card}:{card: Book}) => {

    return (
        <Card key={card.id}>
            <Image src={card.imageLinks?.thumbnail ?? defaultImage} alt={'thumbnail'}/>
                <Title>
                    {card.title}
                </Title>
            <Tooltip>{card.title}</Tooltip>
            <Category>
                {card?.categories ? card.categories[0] : null}
            </Category>
            <Authors>
                {card.authors?.map((a, idx) => <Author key={`${a}-${idx}`}>{a}</Author>)}
            </Authors>
        </Card>
    );
};

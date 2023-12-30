import {Book} from '../store/types';

export const mapBookItems = (items: any): Book[] => {
    return items.map((i:any) => ({
        id: i.id,
        title: i.volumeInfo.title,
        imageLinks: i.volumeInfo.imageLinks,
        authors: i.volumeInfo.authors,
        categories: i.volumeInfo.categories,
    }));
};

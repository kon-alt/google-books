export type ImageLinks = {
    smallThumbnail: string;
    thumbnail: string;
}

export interface Book {
    id: string;
    title: string;
    imageLinks: ImageLinks;
    authors: string[]
    categories: string[];
}

export interface ResponseList<T> {
    items: T[];
    totalItems: number;
}

export type Option = {
    value: string;
    label: string;
}

export type SearchParams = {
    text: string;
    subject: string;
    orderBy: string;
    startIndex: number;
}

export interface AppState {
    params: SearchParams;
    items: Book[];
    totalItems: number;
}

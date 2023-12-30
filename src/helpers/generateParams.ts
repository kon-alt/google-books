import {SearchParams} from '../store/types';
import {paginationStep} from '../settings';

export const generateParams = ({params}: { params: SearchParams }): string => {
    const Q = params.subject === 'all' ? `q=${params.text}` : `q=${params.text}+subject:${params.subject}`;
    return `/volumes?${Q}&orderBy=${params.orderBy}&startIndex=${params.startIndex}&maxResults=${paginationStep}`;
};

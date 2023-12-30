import {Option, SearchParams} from '../store/types';

export const defaultParams:SearchParams = {text: '', subject: 'all', orderBy: 'relevance', startIndex: 0};
export const paginationStep = 30;

export const optionsCategory: Option[] = [
    {value: 'all', label: 'все'},
    {value: 'art', label: 'искусство'},
    {value: 'biography', label: 'биография'},
    {value: 'computers', label: 'компьютеры'},
    {value: 'history', label: 'история'},
    {value: 'medical', label: 'медицина'},
    {value: 'poetry', label: 'поэзия'},
];

export const optionsRelevance: Option[] = [
    {value: 'relevance', label: 'актуальные'},
    {value: 'newest', label: 'новейшие'},
];

import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {mapBookItems} from '../entities';
import {Book, ResponseList} from './types';

const key = process.env.REACT_APP_GOOGLE_API_KEY;

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1',
    credentials: 'include',
    prepareHeaders: (headers) => {
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs,
    unknown,
    FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {

    }

    if (result.error && result.error?.status >= 400 && result.error?.status < 500) {

    }

    if (result.error && result.error?.status >= 500) {

    }

    return result;
};

export const appApi = createApi({
            reducerPath: 'appApi',
            baseQuery: baseQueryWithReauth,
            refetchOnFocus: true,
            tagTypes: ['Books'],
            endpoints: builder => ({
                getBooks: builder.query<ResponseList<Book>, { params: string }>({
                    query: ({params}) => ({
                        url: `${params}&key=${key}`,
                        method: 'GET'
                    }),
                    transformResponse: ({items, totalItems}) => {
                        const result = mapBookItems(items);
                        return {items: result, totalItems};
                    }
                })
            }),
        }
    )
;

export const {useGetBooksQuery, useLazyGetBooksQuery} = appApi;

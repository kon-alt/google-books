import React, {useState} from 'react';
import './App.css';
import {Search} from './components/search';
import {useLazyGetBooksQuery} from './store/app.api';
import {Cards} from './components/cards';
import {CustomSelect} from './components/customSelect';
import {optionsCategory, optionsRelevance, paginationStep} from './settings';
import {useAppDispatch, useAppSelector} from './hooks';
import {clearParams, clearSearchData, setFilter} from './store/app.slice';
import {Option} from './store/types';
import {generateParams} from './helpers';
import {CountBooks} from './components/countBooks';
import {ButtonMore, Filter, Wrapper, Content, Header, HeaderBox, TitlePage, Toolbar} from './styles.components';

function App() {
    const dispatch = useAppDispatch();
    const [getBooks, {isFetching}] = useLazyGetBooksQuery();

    const {params, items, totalItems} = useAppSelector(state => state.app);
    const [text, setText] = useState<string>('');

    const handleSelectCategory = async (item: Option) => {
        await dispatch(clearSearchData());
        const data = {...params, subject: item.value, startIndex: 0};
        dispatch(setFilter(data));
        getBooks({params: generateParams({params: data})});
    };
    const handleSelectRelevance = async (item: Option) => {
        await dispatch(clearSearchData());
        const data = {...params, orderBy: item.value, startIndex: 0};
        dispatch(setFilter(data));
        getBooks({params: generateParams({params: data})});
    };
    const handleSubmit = () => {
        const data = {...params, text};
        dispatch(setFilter(data));
        getBooks({params: generateParams({params: data})});
    };
    const getMore = () => {
        if (totalItems > items?.length) {
            const data = {...params, startIndex: params.startIndex + paginationStep};
            dispatch(setFilter(data));
            getBooks({params: generateParams({params: data})});
        }
    };
    const handleClear = () => {
        dispatch(clearSearchData());
        dispatch(clearParams());
    };

    return (
        <Wrapper>
            <Header>
                <HeaderBox>
                    <Toolbar>
                        <Search
                            initialValue={params.text}
                            handleClear={handleClear}
                            handleSearch={setText}
                            submit={handleSubmit}/>
                        <Filter>
                            <CustomSelect
                                label={'категории'}
                                defaultValue={params.subject}
                                options={optionsCategory}
                                handleSelect={handleSelectCategory}/>
                            <CustomSelect
                                label={'сортировать по:'}
                                defaultValue={params.orderBy}
                                options={optionsRelevance}
                                handleSelect={handleSelectRelevance}/>
                        </Filter>
                    </Toolbar>
                    <TitlePage>Google Books</TitlePage>
                </HeaderBox>
            </Header>
            <Content>
                <CountBooks isFetching={isFetching} totalItems={totalItems} />
                <Cards cards={items}/>
                {items?.length > 0
                    ? <ButtonMore
                        disabled={items?.length >= totalItems}
                        onClick={getMore}>{isFetching ? 'загрузка...' : 'смотреть ещё'}</ButtonMore>
                    : null}
            </Content>
        </Wrapper>
    );
}

export default App;

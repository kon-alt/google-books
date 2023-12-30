import {useDispatch} from 'react-redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppDispatch} from '../store';
import {RootState} from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

import { useSelector, useDispatch } from "react-redux";
import {Dispatch, RootState} from './store';

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

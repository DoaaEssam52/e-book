import { State } from '../models/state-model';

export const booksSelector = (state: State) => state.booksData;

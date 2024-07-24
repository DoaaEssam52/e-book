import { State } from '../models/state-model';

export const authSelector = (state: State) => state.authData;

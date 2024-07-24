import { State } from '../models/state-model';

export const BasketSelector = (state: State) => {
  return state.basketData;
};

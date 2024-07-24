import { createAction, props } from '@ngrx/store';

import { NavbarState } from '../models/navbar-state.model';

export const setNavbarHeight = createAction(
  'SET_NAVBAR_HEIGHT',
  props<{ navbar: NavbarState }>()
);

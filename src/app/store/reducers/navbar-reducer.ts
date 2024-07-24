import { createReducer, on } from '@ngrx/store';

import { setNavbarHeight } from '../actions/navbar-action';

import { NavbarState } from '../models/navbar-state.model';

let navbarState!: NavbarState;

export const NavbarReducer = createReducer(
  navbarState,

  on(setNavbarHeight, (state, action) => {
    return { height: action.navbar.height };
  })
);

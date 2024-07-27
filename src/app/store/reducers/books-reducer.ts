import { createReducer, on } from '@ngrx/store';

import { BooksState } from '../models/books-state-model';

import { getBooksImages } from '../actions/books-action';

const initialBooksState: BooksState = {
  images: [
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/fairy_journey1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/waterfall_story1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/06/bowsman-zy-1516155896-e1560852072514-600x856.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/road_tales1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/rainbow_forest1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/night_castle1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/little_explorers1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/glittering_stars1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/bright_skies1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/back_home1-600x900.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/magic_corner1-600x900.jpg',
  ],
};

export const BooksReducer = createReducer(
  initialBooksState,

  on(getBooksImages, (state) => {
    return { ...state };
  })
);

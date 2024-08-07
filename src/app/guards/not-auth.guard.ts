import { inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CanActivateFn } from '@angular/router';

export const notAuthGuard: CanActivateFn = () => {
  const matSnackBar = inject(MatSnackBar);

  const token = localStorage.getItem('token');

  // If not logged in user
  if (!token) {
    matSnackBar.open('Please you must login first', 'close', {
      duration: 3000,
    });

    return false;
  }

  return true;
};

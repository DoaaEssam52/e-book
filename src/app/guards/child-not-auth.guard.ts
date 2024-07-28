import { inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CanActivateChildFn, Router } from '@angular/router';

export const canActivateChildNotAuthGuard: CanActivateChildFn = () => {
  const router = inject(Router);
  const matSnackBar = inject(MatSnackBar);

  const token = localStorage.getItem('token');

  // If not logged in user
  if (!token) {
    matSnackBar.open('Please login first to be able to shopping', 'close', {
      duration: 3000,
    });

    router.navigateByUrl('/home');

    return false;
  }

  return true;
};

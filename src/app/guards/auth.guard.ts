import { inject } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  // If logged in user
  if (token) {
    router.navigateByUrl('/home');

    return false;
  }

  return true;
};

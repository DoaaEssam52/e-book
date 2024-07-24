import { inject } from '@angular/core';

import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  // If logged in user
  if (token) {
    router.navigateByUrl('/home');

    return false;
  }

  return true;
};

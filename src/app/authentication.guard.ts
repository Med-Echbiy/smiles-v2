import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

export const notAuthenticationGuard: CanActivateFn = (route, state) => {
  let isUserLogged = false;
  inject(AuthenticationService)
    .getUserLogged()
    .subscribe((value) => (isUserLogged = value.userLogged));
  const router = inject(Router);
  console.log(isUserLogged);
  if (!isUserLogged) {
    router.navigateByUrl('/redirect');
    return false;
  }
  console.log('valid');
  return true;
};
export const authenticationGuard: CanActivateFn = (route, state) => {
  let isUserNotLogged = true;
  inject(AuthenticationService)
    .getUserLogged()
    .subscribe((value) => (isUserNotLogged = value.userLogged));
  const router = inject(Router);
  console.log(isUserNotLogged);
  if (isUserNotLogged) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};

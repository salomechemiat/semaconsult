import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../home/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    // if (sessionStorage.getItem('token') && this.authService.GetUserRole() === 'administrator') {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}

import { AuthService } from './../home/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
  private _authService: AuthService, 
  private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
     {
    if (this._authService.GetUserRole() ) {
       
        return true;
    }

    else if(this._router.url === '/')
    {

    // navigate to admin page page
    this._router.navigate(['/']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
  else{
       this._router.navigate(['**']);
        return false;

  }
  }

}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  public decodeToken(token: string) {
    return jwt_decode(token);
  }

  public isValidToken(token: string) {
    return jwt_decode(token);
  }
}

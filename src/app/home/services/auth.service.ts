import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../core/http/api.service';
import { JwtService } from '../../core/services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private apiService: ApiService
  ) { }

  public AuthenticateUser(user): Observable<any> {
    return this.apiService.post('/user/login', {
      email: user.email, password: user.password
    }).pipe(map(
      res => {
        const s = JSON.stringify(res);
        const p = JSON.parse(s);
        console.log(p);
        if (p.status === 'success' && p.message === 'found user') {
          sessionStorage.setItem('token', p.payload);
          return 'true';
        } else if (p.status === 'error' && p.message === 'wrong/password email combaination') {
          return 'zero';
        } else {
          return 'error';
        }
      }));
  }

  public GetUserRole() {
    const jwt = sessionStorage.getItem('token');
    const token = this.jwtService.decodeToken(jwt);
    const s = JSON.stringify(token);
    const p = JSON.parse(s);
    return p.data[0].role;
  }

  public LogoutUser() {
    sessionStorage.removeItem('token');
  }
}

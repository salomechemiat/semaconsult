import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../home/services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
 currentApplicationVersion = environment.appVersion;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public Logout() {
    this.authService.LogoutUser();
    this.router.navigate(['/']);
  }
}

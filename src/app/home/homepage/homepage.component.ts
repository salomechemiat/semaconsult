import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  model: any = {};
  public loading = false;
  public isVisible = false;

  
  constructor(
   
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

   get email(){
      return this.signInForm.get('email')
    }
    get password(){
      return this.signInForm.get('password')
    }
  ngOnInit() {
  }

  public togglePassword() {
    this.isVisible = !this.isVisible;
  }

  public Submit() {

    
    this.loading = true;
    this.authService.AuthenticateUser(this.signInForm.value)
      .subscribe(res => {
        this.loading = false;
        if (res === 'true') {
          this.router.navigate(['/admin']);
        } else if (res === 'zero') {
          alert('Wrong username/password combination');
        } else {
          alert('Oops! something wrong happened. Try again later');
        }
      });
  }

}
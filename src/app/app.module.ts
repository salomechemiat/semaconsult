import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';
import { AuthGuard } from "./guards/auth-guard.service";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomepageComponent,
    AppComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    

  ],
  providers: [
  AuthGuard
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

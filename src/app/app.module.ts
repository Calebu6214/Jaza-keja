import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule} from '@angular/material/button';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http'
// import { inspect } from 'util';
// import { url } from 'inspector';
import { UrlResolver } from '@angular/compiler';
// import { Server } from 'http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    RegisterComponent,
    // CommonModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatInputModule,
    // MatFormFieldModule,
    // ReactiveFormsModule,
    // MaterialModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CommonModule,
    ReactiveFormsModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule
    // UrlResolver,
  ],
  exports: [
    CommonModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

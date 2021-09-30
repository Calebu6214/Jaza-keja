import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { url } from 'inspector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  form!: FormGroup;
  user!: User;
  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    });
  }
  submit():void{
    this.http.post('https://jflaskprojapi.herokuapp.com/#/Authentication/post_auth_register',this.form.getRawValue())
    .subscribe(()=>this.router.navigate(['/app-login']));
    }
}


function controlsConfig(controlsConfig: any, arg1: { username: string; email: string; password: string; }): FormGroup {
  throw new Error('Function not implemented.');
}


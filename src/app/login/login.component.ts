import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
// import {FormControl} from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { first } from 'rxjs/operators';
// import { LoginService } from '../services/login.service';
// import { AlertService } from '../services/alert.service';

// import { LoginService, AlertService } from '@app/services.login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form!: FormGroup;

  constructor(  
    private formBuilder: FormBuilder,
    private http:HttpClient,
    // private route: ActivatedRoute,
    private router: Router,
    // private loginService: LoginService,
    // private alertService: AlertService
    ) { }

  
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

    // convenience getter for easy access to form fields
    // get f() { return this.form.controls; }

    onSubmit() {
        // this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        // if (this.form.invalid) {
        //     return;
        // }

        // this.loading = true;
        // this.loginService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //       (data: any) => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //       (error: any) => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
        this.http.post('https://jflaskprojapi.herokuapp.com/#/Authentication/get_auth_login',this.form.getRawValue(),{
          withCredentials: true})
        .subscribe(()=>this.router.navigate(['/']));
    }

}

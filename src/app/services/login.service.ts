import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// import { environment } from '@environments/environment';
// import { User } from '../models/user';
// import { environment } from 'src/environments/environment';
// // import { User } from '@app/models';

@Injectable({ providedIn: 'root' })
export class LoginService {
//     private userSubject: BehaviorSubject<User>;
//     public user: Observable<User>;

//     constructor(
//         private router: Router,
//         private http: HttpClient
//     ) {
//         this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
//         this.user = this.userSubject.asObservable();
//     }

//     public get userValue(): User {
//         return this.userSubject.value;
//     }

    // login(username: any, password: any) {
    //     return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('user', JSON.stringify(user));
    //             this.userSubject.next(user);
    //             return user;
    //         }));
    // }
  }

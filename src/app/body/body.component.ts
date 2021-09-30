import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
message='';
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://jflaskprojapi.herokuapp.com/#/Authentication/user',{withCredentials:true}).subscribe(
      (res:any )=>{
        this.message='Hi ${res.username}';
        Emitters.authEmitter.emit(true);
      },
      err =>{
        this.message='You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
  }

}

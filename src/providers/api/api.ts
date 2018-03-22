import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class ApiProvider {

  random: number;
  random2 : number;
  user: Observable<any>;
  name: String;
  action: Observable<any>; 
  activity: String;

  constructor(public http: HttpClient) {}
 
  //rand pour l'affichage du user et de l'action
  rand(){
    return this.random = Math.floor(Math.random() * 47);
  }

  rand2(){
    return this.random2 = Math.floor(Math.random() * 30);
  }

  //recupere le user depuis l'api
  getUser() {
    this.rand();
    console.log('random user : ', this.random);
    return this.http.get('https://isenenslipapi.herokuapp.com/user/'+this.random);
  }

  //recupere l'action depuis l'api
  getAction() {
    this.rand2();
    console.log('random activity : ', this.random2);
    return this.http.get('https://isenenslipapi.herokuapp.com/action/'+this.random2);
  }

  //lance la récuperation du user et de l'action depuis l'api
  play(){
    this.user = this.getUser();
    this.user
    .subscribe(data => {
      console.log('my data: ', data.name);
      this.name = data.name;
    });
    this.action = this.getAction();
    this.action
    .subscribe(data => {
      console.log('my data: ', data.activity);
      this.activity = data.activity;
    });
  }

}

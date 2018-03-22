
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-jouer',
  templateUrl: 'jouer.html'
})
export class JouerPage {
  @ViewChild(TimerComponent) timer: TimerComponent;


  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    //lance l'api pour le debut de la partie  
    this.apiProvider.play();
  }

  //lance le timer à l'initialisation
  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  } 


  ionViewDidEnter() {
    
  } 

  ionViewDidLeave() {
  this.timer.pauseTimer();
  }

  


}
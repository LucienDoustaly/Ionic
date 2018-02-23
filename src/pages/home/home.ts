
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReglesPage } from '../regles/regles';
import { JoueurPage } from '../joueur/joueur';
import { ParametresPage } from '../parametres/parametres';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) { 
  }

  goToRegles() {
    this.navCtrl.push(ReglesPage);
  }

  goToJoueurs() {
    this.navCtrl.push(JoueurPage);
  }

  goToParametres() {
    this.navCtrl.push(ParametresPage);
  }

  

  
}

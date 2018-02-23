import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlateauPage } from '../plateau/plateau';

/**
 * Generated class for the JoueurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joueur',
  templateUrl: 'joueur.html',
})
export class JoueurPage {

  joueurs: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoueurPage');
  }


  goToPlateau(nbrJoueur){
    this.navCtrl.push(PlateauPage, nbrJoueur);
  }


}

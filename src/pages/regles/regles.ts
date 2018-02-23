import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-regles',
  templateUrl: 'regles.html',
})
export class ReglesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReglesPage');
  }

  goBackToMenu() {
    this.navCtrl.pop();
  }

  launchPopUp() {
    let alert = this.alertCtrl.create({
      title: 'Balais couilles',
      subTitle: "On peut plus rien faire pour toi la, désolé",
      buttons: [{
        text: "Tan pis",
        handler: data => {
          this.goBackToMenu();
        }
      }]
    });
    alert.present();
  }



}

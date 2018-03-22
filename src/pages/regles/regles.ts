import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';


@IonicPage()
@Component({
  selector: 'page-regles',
  templateUrl: 'regles.html',
})
export class ReglesPage {

  public audio: MediaObject;

  constructor(public platform: Platform, public navCtrl: NavController, 
    public navParams: NavParams, private alertCtrl: AlertController, 
    private media: Media) { }


  //retourne au menu du jeu
  goBackToMenu() {
    this.navCtrl.pop();
  }

  //joue le son (pour la popup)
  playSound() {
    if(this.audio)
    {
      this.audio.stop();
      this.audio.release();
    }

    this.audio = this.media.create('/android_asset/www/assets/raw/ah.mp3');
    this.audio.play();
    this.audio.setVolume(0.8);
  }

  //lance la popup
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
    this.playSound();
  }

}

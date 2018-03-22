import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReglesPage } from '../regles/regles';
import { JouerPage } from '../jouer/jouer';
import { ParametresPage } from '../parametres/parametres';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Subscription} from 'rxjs/Subscription';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 
  @ViewChild(TimerComponent) timer: TimerComponent;

  public connect: Subscription;
  public disconnect: Subscription;
  private etatConnect;
  public audio: MediaObject;

  constructor(public navCtrl: NavController, private diagnostic: Diagnostic, 
    private alertCtrl: AlertController, private network: Network, 
    private media: Media) { }



  ionViewDidEnter() {

    //surveille la connexion à internet
    this.connect = this.network.onConnect().subscribe(data => {
      console.log(data)
      this.etatConnexion(data.type);
    }, error => console.error(error));
   
    //surveille la déconnexion à internet
    this.disconnect = this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.etatConnexion(data.type);
    }, error => console.error(error));

    this.bgSound();    
  }  

  ionViewDidLeave() {
    this.audio.stop();
  }

  //son du background
  bgSound() {
    if(this.audio)
    {
      this.audio.stop();
      this.audio.release();
    }

    this.audio = this.media.create('/android_asset/www/assets/raw/backgroundmusic.mp3');
    this.audio.play();
    this.audio.setVolume(0.8);
  }

  //redirige vers la page des regles
  goToRegles() {
    this.navCtrl.push(ReglesPage);
  }

  //redirige vers la page de début du jeu
  goToJouers() {
    //si pas de connecxion => pas d'accès a la page jouer
    if( this.etatConnect == "offline"){
      let alertInternet = this.alertCtrl.create({
        title: 'Impossible de se connecter',
        message: 'Vous avez besoin d\'une connexion internet pour cette application.S\'il vous plait, activez la WiFi ou les données mobles dans les Paramètres du téléphone',
        buttons: [
          {
            text: 'Retour'
          }, {
            text: 'Paramètres',
            handler: () => {
              this.diagnostic.switchToWirelessSettings();
            }
          }
        ]
      });
      alertInternet.present();
    }else {
      this.navCtrl.push(JouerPage);
    }
  }

  //redirige vers la page des parametres
  goToParametres() {
    this.navCtrl.push(ParametresPage);
  }

  //vérifie si la wifi ou les données mobiles sont activées
  etatConnexion(connectionState: string){
    this.etatConnect = connectionState;

    //test si le téléphone est bien connecté à internet
    if(this.etatConnect !== "online"){
      let alertInternet = this.alertCtrl.create({
        title: 'Impossible de se connecter',
        message: 'Vous avez besoin d\'une connexion internet pour cette application.S\'il vous plait, activez la WiFi ou les données mobles dans les Paramètres du téléphone',
        buttons: [
          {
            text: 'Retour'
          }, {
            text: 'Paramètres',
            handler: () => {
              this.diagnostic.switchToWirelessSettings();
            }
          }
        ]
      });
      alertInternet.present();
    }
    
  }


  

  
  

  
}

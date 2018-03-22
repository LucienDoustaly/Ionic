import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the ParametresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {

  public monUri;
  public nativepath;
  public file: MediaObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private fileChooser : FileChooser, private media: Media, 
    private filePath: FilePath) { }


  //retourne au menu principal
  goBackToMenu() {
    this.navCtrl.pop();
  }

  //cette fonctionnalité ne fonctionne pas sous ionic à cause d'un changement récent dans la doc technique ionic
  ajouteMusique(){
    this.fileChooser.open().then(uri => this.monUri = uri);
    //uri obtenu : content://com.android.providers.media.documents/document/audio%3A20826
    this.filePath.resolveNativePath(this.monUri).then(result =>this.nativepath = result);
    this.file = this.media.create(this.nativepath);
    this.file.play();
  }
  


}
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Media } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';
import { HttpClientModule } from '@angular/common/http';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReglesPage } from '../pages/regles/regles';
import { ParametresPage } from '../pages/parametres/parametres';
import { JouerPage } from '../pages/jouer/jouer';
import { ApiProvider } from '../providers/api/api';
import { TimerComponent } from '../pages/timer/timer';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReglesPage,
    ParametresPage,
    JouerPage,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    HomePage,
    ReglesPage,
    ParametresPage,
    JouerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    Media,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    Diagnostic,
    Network,
    FilePath
   

  ]
})
export class AppModule {}

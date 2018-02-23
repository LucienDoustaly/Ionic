import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReglesPage } from '../pages/regles/regles';
import { ParametresPage } from '../pages/parametres/parametres';
import { JoueurPage } from '../pages/joueur/joueur';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReglesPage,
    ParametresPage,
    JoueurPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    HomePage,
    ReglesPage,
    ParametresPage,
    JoueurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

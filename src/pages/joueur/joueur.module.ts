import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoueurPage } from './joueur';

@NgModule({
  declarations: [
    JoueurPage,
  ],
  imports: [
    IonicPageModule.forChild(JoueurPage),
  ],
})
export class JoueurPageModule {}

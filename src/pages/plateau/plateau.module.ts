import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlateauPage } from './plateau';

@NgModule({
  declarations: [
    PlateauPage,
  ],
  imports: [
    IonicPageModule.forChild(PlateauPage),
  ],
})
export class PlateauPageModule {}

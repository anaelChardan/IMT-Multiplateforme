import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakerDetail } from './speaker-detail';

@NgModule({
  declarations: [
    SpeakerDetail,
  ],
  imports: [
    IonicPageModule.forChild(SpeakerDetail),
  ],
})
export class SpeakerDetailModule {}

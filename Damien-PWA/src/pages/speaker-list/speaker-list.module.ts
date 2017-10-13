import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakerList } from './speaker-list';

@NgModule({
  declarations: [
    SpeakerList,
  ],
  imports: [
    IonicPageModule.forChild(SpeakerList),
  ],
})
export class SpeakerListModule {}

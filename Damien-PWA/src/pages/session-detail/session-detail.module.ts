import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionDetail } from './session-detail';

@NgModule({
  declarations: [
    SessionDetail,
  ],
  imports: [
    IonicPageModule.forChild(SessionDetail),
  ],
})
export class SessionDetailModule {}

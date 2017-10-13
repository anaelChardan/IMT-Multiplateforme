import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionList } from './session-list';

@NgModule({
  declarations: [
    SessionList,
  ],
  imports: [
    IonicPageModule.forChild(SessionList),
  ],
})
export class SessionListModule {}

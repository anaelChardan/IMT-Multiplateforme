import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneDetails } from './phone-details';

@NgModule({
  declarations: [
    PhoneDetails,
  ],
  imports: [
    IonicPageModule.forChild(PhoneDetails),
  ],
})
export class PhoneDetailsModule {}

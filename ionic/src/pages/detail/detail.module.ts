import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
      NgZorroAntdModule
  ],
})
export class DetailPageModule {}

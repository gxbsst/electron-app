import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HomePage} from './home';
import {TabModule} from '../tabs/tab.module'
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [IonicModule,NgZorroAntdModule],
  declarations: [HomePage],
  entryComponents: [HomePage],
  providers: [],
  exports: [IonicModule]
})
export class HomeModule {
}

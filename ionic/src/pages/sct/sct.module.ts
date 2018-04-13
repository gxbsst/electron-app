import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SctPage} from './sct';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {RouterModule, Routes} from "@angular/router";
import {InstallComponent} from "./install/install";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MqttPage} from "../mqtt/mqtt";
import {MqttPageModule} from "../mqtt/mqtt.module";


const appRoutes: Routes = [
    { path: 'install', component: InstallComponent },
    { path: 'mqtt', component: MqttPage },
    { path: '', redirectTo: '/install', pathMatch: 'full' },
];



@NgModule({
    declarations: [
        SctPage,
        InstallComponent,
    ],
    imports: [
        MqttPageModule,
        NgZorroAntdModule,
        BrowserAnimationsModule,
        IonicPageModule.forChild(SctPage),
        NgZorroAntdModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )

    ],
    exports: [
        InstallComponent
    ]
})
export class SctPageModule {
}

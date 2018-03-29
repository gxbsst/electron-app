import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SctPage} from './sct';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {RouterModule, Routes} from "@angular/router";
import {InstallComponent} from "./install/install";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
    { path: 'install', component: InstallComponent },
];



@NgModule({
    declarations: [
        SctPage,
        InstallComponent,
    ],
    imports: [
        NgZorroAntdModule,
        BrowserAnimationsModule,
        IonicPageModule.forChild(SctPage),
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

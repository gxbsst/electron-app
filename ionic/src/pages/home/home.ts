import {Component} from '@angular/core';
import {FabContainer, NavController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {SctPage} from "../sct/sct";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,) {
    }

    goto(fab: FabContainer, url: string) {
        fab.close();
        window.location.href = url
        // this.navCtrl.push('SetupPage', {}, { animate: true, direction: 'forward' });
    }

    showSct() {
        this.navCtrl.push(SctPage);
    }

    gotoLocations(fab: FabContainer) {
        fab.close();
        // window.location.href = "http://fap.wenshidata.com:9999"
        this.navCtrl.push(TabsPage)
        // this.navCtrl.setRoot('TabsPage');
        //   await this.navCtrl.push('TabsPage', {}, { animate: true, direction: 'forward' });
    }

}

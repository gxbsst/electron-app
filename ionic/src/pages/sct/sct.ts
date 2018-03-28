import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DetailPage} from "../detail/detail";

/**
 * Generated class for the SctPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sct',
    templateUrl: 'sct.html',
})
export class SctPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SctPage');
    }

    showDetail(key: string) {
        this.navCtrl.push(DetailPage);
    }

}

import {ModalController, NavController, NavParams} from "ionic-angular";
import {Component, Input} from "@angular/core";
import {ElectronIpcService} from "../../../service/electronipc-service";

@Component({
    selector: "install-sct",
    templateUrl: "install.html"
})
export class InstallComponent {
    @Input() item;
    @Input() title;

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                public navParams: NavParams,
                public service: ElectronIpcService,) {
    }

    showProduct(item) {
        // let modal = this.modalCtrl.create(ProductListPage, {
        //     dtlList: item.dtlList
        // });
        // modal.present();
    }

    install(name: string) {
        this.service.installApp(name)
    }
}

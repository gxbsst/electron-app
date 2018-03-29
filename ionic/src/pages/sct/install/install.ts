import {ModalController, NavController, NavParams} from "ionic-angular";
import {Component, Input} from "@angular/core";
import {ElectronIpcService} from "../../../service/electronipc-service";
import {ElectronService} from "ngx-electron";

@Component({
    selector: "install-sct",
    templateUrl: "install.html"
})
export class InstallComponent {
    @Input() item;
    @Input() title;

    data = [
        {
            key: '1',
            name: 'OPC',
            status: 'off',

        }, {
            key: '2',
            name: 'SCT',
            status: 'off',

        }, {
            key: '3',
            name: 'RFID',
            status: 'off',
        }
    ];

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                public navParams: NavParams,
                private electron: ElectronService,
                public service: ElectronIpcService,) {

        this.electron.ipcRenderer.on("appSctStatus", (event, status) => {
            this.data[0]['status'] = status
        })

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

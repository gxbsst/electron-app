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
            status: 'closed',

        }, {
            key: '2',
            name: 'SCT',
            status: 'closed',

        }, {
            key: '3',
            name: 'RFID',
            status: 'closed',
        },
        {
            key: '4',
            name: 'PRINTER',
            status: 'closed',
        }
    ];

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                public navParams: NavParams,
                private electron: ElectronService,
                public service: ElectronIpcService,) {



    }

    ngOnInit() {
        this.electron.ipcRenderer.on("appOPCStatus", (event, status) => {
            this.data[0]['status'] = status
        })

        this.electron.ipcRenderer.on("appSctStatus", (event, status) => {
            this.data[1]['status'] = status
        })
        this.electron.ipcRenderer.on("appRFIDStatus", (event, status) => {
            this.data[2]['status'] = status
        })

        this.electron.ipcRenderer.on("appPrinterStatus", (event, status) => {
            this.data[3]['status'] = status
        })
    }


    install(name: string) {
        this.service.installApp(name)
    }

    closeApp(name: string) {
        this.service.closeApp(name)
    }


}

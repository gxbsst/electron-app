import {ModalController, NavController, NavParams} from "ionic-angular";
import {Component, Input} from "@angular/core";
import {ElectronIpcService} from "../../../service/electronipc-service";
import {ElectronService} from "ngx-electron";
import {CommonService} from "../../../service/CommonService";
let portscanner = require('portscanner')

// const si = require('systeminformation');

// 应用端口
const OPCPORT = 135
const PRINTERPORT = 8099
const SCTPORT = 8080
const RFIDPORT = 8080

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
        },
        {
            key: '5',
            name: 'CUBA',
            status: 'closed',
        }
    ];

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                public navParams: NavParams,
                private electron: ElectronService,
                private commonService: CommonService,
                public service: ElectronIpcService,) {


    }

    ngOnInit() {
        if (this.electron.ipcRenderer) {
            // callback style
            // si.cpu(function (data) {
            //     console.log('CPU-Information:');
            //     console.log(data);
            // });

            // promises style - new in version 3
            // si.cpu()
            //     .then(data => console.log(data))
            //     .catch(error => console.error(error));

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
    }


    install(name: string) {
        this.commonService.startApp('SCT', (status) => {
            this.data[1]['status'] = status
        })
        // this.service.installApp(name)
    }

    closeApp(name: string) {
        this.service.closeApp(name)
    }



}



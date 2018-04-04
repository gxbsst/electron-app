/**
 * Created by yanxiaojun on 2017/2/16.
 */
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {HttpService} from "../providers/HttpService";
import {Utils} from "../providers/Utils";
import {NativeService} from "../providers/NativeService";
import {APP_VERSION_SERVE_URL} from "../providers/Constants";
import {Logger} from "../providers/Logger";

import gui from  './gui'

declare var child_process: any;
declare var remote: any;
declare var electron: any;
let process = remote.process

// 应用服务
const OPC = 'WSOpcConnector.jar'
const PRINTER = 'printmanager.jar'
const RFID = 'rfid_manager-1.0-SNAPSHOT.jar'

// 应用进程
let opcProcess
let rfidProcess
let printerProcess
let sctProcess

// PATH
const MACJAVACMD = gui.app.getAppPath() + '/app/applications/jre/mac/Contents/Home/bin/java'
const WINDOWJAVACMD = gui.app.getAppPath() + '/app/applications/jre/win/bin/java.exe'
const APPHOME = gui.app.getAppPath() + '/app/applications/'

// 判断平台
let platform = process.platform;

let JAVACMD = MACJAVACMD
if (platform === 'win32') {
    JAVACMD = WINDOWJAVACMD
}


@Injectable()
export class CommonService {
    private last: any;

    constructor(public httpService: HttpService, public nativeService: NativeService, public logger: Logger) {
    }


    /**
     * 登录获取token
     */
    getToken(username, password) {
        return this.httpService.post('/v1/login', {
            'client_id': 'app',
            'username': username,
            'password': Utils.hex_md5(password)
        });
    }

    /**
     * 查询用户信息
     */
    getUserInfo() {
        return this.httpService.get('/v1/public/user/self');
    }


    /**
     * 获取新token
     */
    getNewToken() {
        return this.httpService.post('/v1/refresh_token');
    }

    /**
     * 查询登录用户所拥有的资源
     * resourceType: 资源类型1:菜单,2:url,3:按钮
     */
    getResource(resourceType: number = 1) {
        const url = '/v1/public/resource';
        let json = Utils.sessionStorageGetItem(url);
        if (json) {
            return Observable.of(json.filter((item) => {
                return item.resourceType == resourceType;
            }));
        }
        return this.httpService.post(url, {clientType: 2}).map((res) => {
            Utils.sessionStorageSetItem(url, res);
            return res.filter((item) => {
                return item.resourceType == resourceType;
            });
        });
    }

    /**
     * 更新文件缓存文件关系
     */
    fileRelationReplace(data) {
        return this.httpService.post('/fileRelation/replace', data).map((res: Response) => res.json());
    }

    /**
     * 从版本管理服务中查询app版本信息
     */
    getAppVersion() {
        return Observable.create(observer => {
            this.nativeService.getPackageName().subscribe(packageName => {//获得app包名
                let appName = packageName.substring(packageName.lastIndexOf('.') + 1);
                let appType = this.nativeService.isAndroid() ? 'android' : 'ios';
                let url = Utils.formatUrl(`${APP_VERSION_SERVE_URL}/v1/apply/getDownloadPageByEName/${appName}/${appType}`);
                this.httpService.get(url).subscribe(res => {
                    if (res && res.code == 1) {
                        observer.next(res.data);//返回app最新版本信息
                    }
                }, err => {
                    this.logger.log(err, '从版本升级服务获取版本信息失败', {
                        url: url
                    });
                    observer.error(false);
                })
            }, err => {
                this.logger.log(err, '获取包名失败');
                observer.error(false);
            })
        });
    }

    /**
     * 查询公告列表
     */
    findPublishList() {
        return this.httpService.post('/sys/notice/findPublishList').map((res: Response) => res.json());
    }

    /**
     * 查询公告详情
     */
    getPublishDetail(id) {
        return this.httpService.get(`/sys/notice/getById/${id}`).map((res: Response) => res.json());
    }


    isWin() {
        return process.platform.toLowerCase().indexOf('win') === 0;
    }

    isMac() {
        return process.platform.toLowerCase().indexOf('mac') === 0;
    }

    startApp(appName, exitFunc) {
        let me = this;
        let exec = child_process.exec;
        let execSync = child_process.execSync;
        let spawn = child_process.spawn;

        if (appName === 'SCT') {

            if (this.isWin()) {
                execSync('./gradlew.bat undeploy setupTomcat deploy',
                    {
                        cwd: gui.app.getAppPath() + '/sct/'
                    });

                exec("./catalina.bat stop", {
                    cwd: gui.app.getAppPath() + '/sct/deploy/tomcat/bin'
                }, function (error, stdout, stderr) {
                    debugger
                })

                let sctProcess = exec("./catalina.bat run", {
                    cwd: gui.app.getAppPath() + '/sct/deploy/tomcat/bin'
                }, function (error, stdout, stderr) {
                    debugger
                })
            } else {
                execSync('./gradlew undeploy setupTomcat deploy',
                    {
                        cwd: gui.app.getAppPath() + '/sct/'
                    });

                exec("./catalina.sh stop", {
                    cwd: gui.app.getAppPath() + '/sct/deploy/tomcat/bin'
                }, function (error, stdout, stderr) {
                    debugger
                })

                let sctProcess = exec("./catalina.sh run", {
                    cwd: gui.app.getAppPath() + '/sct/deploy/tomcat/bin'
                }, function (error, stdout, stderr) {
                    debugger
                })
            }

            exitFunc('open');

        }


        // 打印服务
        if (appName === "PRINTER") {

            printerProcess = spawn(JAVACMD + ' -jar ' + APPHOME + PRINTER, {
                cmd: APPHOME
            }, function (error, stdout, stderr) {
                debugger
            })
        }

        // rfid 服务
        if (appName === 'RFID') {
            rfidProcess = exec(JAVACMD + ' -jar ' + APPHOME + RFID, {
                cmd: APPHOME
            }, function (error, stdout, stderr) {
                debugger
            })
        }

        // opc 服务
        if (appName === 'OPC') {
            opcProcess = exec(JAVACMD + ' -jar ' + APPHOME + OPC, {
                cmd: APPHOME,
                maxBuffer: 1024 * 5000
            }, function (error, stdout, stderr) {
                debugger
            })
        }

    }

}

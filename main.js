const {app, BrowserWindow, Menu, session, remote} = require('electron');
let spawn = require('child_process').spawn;
let mainWindow;
let serverProcess;
var path = require('path');

let template = require('./menu');

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

let platform = process.platform;


function killProcess(e) {
    // if (platform === 'win32') {
    //     spawn("cmd.exe", ["/c", "shutdown.bat"], {
    //         cwd: app.getAppPath() + '/app/bin'
    //     })
    // }
    // else {
    //     spawn("./shutdown.sh", [], {
    //         cwd: app.getAppPath() + '/app/bin'
    //     })
    // }

}

function createWindow() {


    // if (platform === 'win32') {

    //     serverProcess = spawn("cmd.exe", ["/c", "startup.bat"], {
    //         cwd: app.getAppPath() + '/app/bin'
    //     })

    // } else {

    //     serverProcess = spawn("./startup.sh", [], {
    //         cwd: app.getAppPath() + '/app/bin'
    //     })

    // }

    let appUrl = 'http://fap.wenshidata.com';
    // let coreUrl = 'http://localhost:8080/app-core';

    const openWindow = function () {
        mainWindow = new BrowserWindow({
            title: '文什项目管理',
            width: 1280,
            height: 800,
            webPreferences: {
                // allowRunningInsecureContent: true,
                // webSecurity: false,
                preload: path.resolve('./preload.js'),
                nodeIntegration: false //doesn't matter if node integration turned off or on, same result
            }
        });


        mainWindow.loadURL(appUrl);
       
        // mainWindow.webContents.openDevTools();



        Menu.setApplicationMenu(Menu.buildFromTemplate(template));


        mainWindow.on('closed', function () {
            mainWindow = null;
        });

        mainWindow.on('close', function (e) {
            killProcess(e);
        });

        // 清除http cache
        mainWindow.webContents.on('did-finish-load', function() {
        
            mainWindow.webContents.session.clearCache(function(){
                //some callback.
                });
          })
    };
    // openWindow();
    const startUp = function () {
        const requestPromise = require('minimal-request-promise');

        requestPromise.get(appUrl).then(function (response) {
            openWindow();

        }, function (response) {
            console.log('Waiting for the server start... ' + response);

            setTimeout(function () {
                startUp();
            }, 200);
        });
    };
    startUp();
}

// app.commandLine.appendSwitch('ignore-certificate-errors');  


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});

app.on('will-quit', (e) => {
    killProcess(e);
});





const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
var path = require('path');

let template = [
    {
        label: '工具',
        submenu: [
            {
                label: 'JENKINS',
                accelerator: 'Shift+CmdOrCtrl+J',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: 'JENKINS',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('http://fap.wenshidata.com:9999')
                }
            },
            {
                label: 'CODE',
                accelerator: 'Shift+CmdOrCtrl+C',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: 'CODE',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://code.wenshidata.com')
                }
            },
            {
                label: 'APPCENTER',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: 'APPCENTER',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://appcenter.ms/apps')
                }
            }
        ]
    },
    {
        label: '工程',
        submenu: [
            {
                label: 'FAP',
                click: function () {

                    let mainWindow = new BrowserWindow({
                        title: '文什项目管理',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('http://fap.wenshidata.com:8882/fap/')
                    // BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com:8882/fap/') 

                }
            },
            {
                label: 'SCT',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: '文什项目管理',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('http://fap.wenshidata.com:8080/app/#!')
                }
            }
        ]
    },
    {
        label: '项目管理',
        submenu: [
            {
                label: '富朗特',
                accelerator: 'CmdOrCtrl+1',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/projects/fap/issues?query_id=6&per_page=100')
                }
            },
            {
                label: 'SCT',
                accelerator: 'CmdOrCtrl+2',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/projects/f-sct/issues?query_id=6&per_page=100')
                }
            },
            {
                label: 'FAP',
                accelerator: 'CmdOrCtrl+3',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/projects/faq/issues?query_id=6&per_page=100')
                }
            },
            {
                label: '移动端',
                accelerator: 'CmdOrCtrl+4',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/projects/far/issues?query_id=6&per_page=100')
                }
            },
            {
                label: '个人文档',
                accelerator: 'CmdOrCtrl+5',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/projects/f-scz/dmsf')
                }
            }
        ]
    },
    {
        label: '操作',
        submenu: [
            {
                label: '项目',
                accelerator: 'Shift+CmdOrCtrl+H',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/admin/projects')
                }
            },
            {
                label: '新建项目',
                accelerator: 'Shift+CmdOrCtrl+N',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/projects/new')
                }
            },
            {
                label: '问题',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/issues?query_id=7')
                }
            },
            {
                label: '新建问题',
                accelerator: 'CmdOrCtrl+N',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/projects/fap/issues/new')
                }
            },
            {
                label: '甘特图',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/issues/gantt')
                }
            },
            {
                label: '日历',
                click: function () {
                    BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/issues/calendar')
                }
            }

        ]
    },
    {
        label: '设置',
        submenu: [{
            label: '管理',
            click: function () {
                BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/admin')
            }
        }, {
            label: '配置',
            click: function () {
                BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/settings')
            }
        },
        {
            label: '新建用户',
            click: function () {
                BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/users/new')
            }
        },
        {
            label: '编辑菜单',
            click: function () {
                console.error(app.getAppPath())
                let p = path.join(__dirname, 'menu.js')
                electron.shell.openItem(p)
            }
        },
        {
            label: '编辑MAIN',
            click: function () {
                console.error(app.getAppPath())
                let p = path.join(__dirname, 'main.js')
                electron.shell.openItem(p)
            }
        }
        ]
    },
    {
        label: '编辑',
        submenu: [{
            label: '撤销',
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
        }, {
            label: '重做',
            accelerator: 'Shift+CmdOrCtrl+Z',
            role: 'redo'
        }, {
            type: 'separator'
        }, {
            label: '剪切',
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
        }, {
            label: '复制',
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
        }, {
            label: '粘贴',
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
        }, {
            label: '全选',
            accelerator: 'CmdOrCtrl+A',
            role: 'selectall'
        }]
    },

    {
        role: 'View',
        label: '查看',
        submenu: [{
            label: '刷新',
            accelerator: 'CmdOrCtrl+R',
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    // 重载之后, 刷新并关闭所有的次要窗体
                    if (focusedWindow.id === 1) {
                        BrowserWindow.getAllWindows().forEach(function (win) {
                            if (win.id > 1) {
                                win.close()
                            }
                        })
                    }
                    focusedWindow.reload()
                }
            }
        },

        {
            label: 'Back',
            accelerator: 'CmdOrCtrl+B',
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    focusedWindow.webContents.goBack();
                }
            }
        },
        {
            label: 'Forward',
            accelerator: 'CmdOrCtrl+F',
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    focusedWindow.webContents.goForward();
                }
            }
        },
        { role: 'zoomin', label: '放大' },
        { role: 'zoomout', label: '缩小' },
        {
            label: '切换全屏',
            accelerator: (function () {
                if (process.platform === 'darwin') {
                    return 'Ctrl+Command+F'
                } else {
                    return 'F11'
                }
            })(),
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
                }
            }
        }, {
            label: '切换开发者工具',
            accelerator: (function () {
                if (process.platform === 'darwin') {
                    return 'Alt+Command+I'
                } else {
                    return 'Ctrl+Shift+I'
                }
            })(),
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    focusedWindow.toggleDevTools()
                }
            }
        }
        ]
    }, {
        label: '窗口',
        role: 'window',
        submenu: [{
            label: '最小化',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
        }, {
            label: '关闭',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
        }, {
            type: 'separator'
        }, {
            label: '重新打开窗口',
            accelerator: 'CmdOrCtrl+Shift+T',
            enabled: false,
            key: 'reopenMenuItem',
            click: function () {
                app.emit('activate')
            }
        }]
    },
    {
        label: '常用工具',
        submenu: [
            {
                label: "SketchUp",
                click: function () {
                    electron.shell.openItem('/Applications/SketchUp 2018/SketchUp.app')
                }
            },
            {
                label: "Studio",
                click: function () {
                    electron.shell.openItem('/Applications/CUBA Studio SE.app')
                }
            },
            {
                label: "Idea",
                click: function () {
                    electron.shell.openItem('/Applications/IntelliJ IDEA.app')
                }
            },
            {
                label: "WebStorm",
                click: function () {
                    electron.shell.openItem('/Applications/WebStorm.app')
                }
            },
            {
                label: "Xcode",
                click: function () {
                    electron.shell.openItem('/Applications/Xcode.app')
                }
            },
            {
                label: "VSCODE",
                click: function () {
                    electron.shell.openItem('/Applications/Visual Studio Code.app')
                }
            },
            {
                type: 'separator'
            },
            {
                label: "Foxmail",
                click: function () {
                    electron.shell.openItem('/Applications/Foxmail.app')
                }
            }
        ]
    },
    {
        label: '系统',

        submenu: [{
            label: 'WS-OPC-CONNECTOR',

            click: function () {
                electron.shell.openExternal('http://localhost:8080/app-webstart/software/WSopc.exe')
            }
        }, {
            label: 'WS-PRINTER-CONNECTOR',

            click: function () {
                electron.shell.openExternal('http://localhost:8080/app-webstart/software/WSPrint_Connector_setup.exe')
            }
        }, {
            type: 'separator'
        }, {
            label: 'WS-RFID-CONNECTOR',

            click: function () {
                electron.shell.openExternal('http://localhost:8080/app-webstart/software/WSRFID_Connector.exe')
            }
        },
        {
            label: 'WS-PRINTER-SERVICE',

            click: function () {
                electron.shell.openExternal('http://localhost:8080/app-webstart/software/WSPrinter_setup.exe')
            }
        },
        {
            label: 'HMI',

            click: function () {
                electron.shell.openExternal('http://localhost:8080/app-webstart/App.jnlp')
            }
        },
        {
            label: '客户端',

            click: function () {
                electron.shell.openExternal('http://www.wenshidata.com')
            }
        }
        ]
    },
    {
        label: '学习',
        submenu: [
            {
                label: 'Bookmarks',
                // accelerator: 'Shift+CmdOrCtrl+J',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: 'Pluralsight',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://www.google.com.hk/bookmarks/?pli=1')
                }  
            },
            {
                label: 'Pluralsight',
                // accelerator: 'Shift+CmdOrCtrl+J',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: 'Pluralsight',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://app.pluralsight.com')
                }
            },
            {
                label: 'TeamTreeHouse',
                // accelerator: 'Shift+CmdOrCtrl+J',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: 'TeamTreeHouse',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://teamtreehouse.com/library')
                }
            },
            {
                label: 'frontendmasters',
                // accelerator: 'Shift+CmdOrCtrl+J',
                click: function () {
                    let mainWindow = new BrowserWindow({
                        title: 'frontendmasters',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://frontendmasters.com/')
                }
            },
            {
                label: 'jhipster',
                click: function() {
                    electron.shell.openExternal('https://www.jhipster.tech') 
                }
            },
            {
                label: 'jdl-studio',
                click: function() {
                    let mainWindow = new BrowserWindow({
                        title: 'jdl-studio',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://start.jhipster.tech/jdl-studio/')
                }
            },
            {
                label: 'Google',
                click: function() {
                    let mainWindow = new BrowserWindow({
                        title: 'Google',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://www.google.com/')
                }
            },
            {
                label: 'Baidu',
                click: function() {
                    let mainWindow = new BrowserWindow({
                        title: 'Baidu',
                        width: 800,
                        height: 600,
                        webPreferences: {
                            // allowRunningInsecureContent: true,
                            // webSecurity: false,
                            preload: path.resolve('./preload.js'),
                            nodeIntegration: false //doesn't matter if node integration turned off or on, same result
                        }
                    });
                    mainWindow.loadURL('https://www.Baidu.com/')
                }
            }
        ]
    },
    {
        label: '帮助',
        role: 'help',
        submenu: [{
            label: '学习更多',
            click: function () {
                electron.shell.openExternal('http://www.wenshidata.com')
            }
           
        }]
    }
]

if (process.platform === 'darwin') {
    const name = electron.app.getName()
    template.unshift({
        label: name,
        submenu: [{
            label: `关于 ${name}`,
            role: 'about'
        }, {
            type: 'separator'
        }, {
            label: '服务',
            role: 'services',
            submenu: []
        }, {
            type: 'separator'
        }, {
            label: `隐藏 ${name}`,
            accelerator: 'Command+H',
            role: 'hide'
        }, {
            label: '隐藏其它',
            accelerator: 'Command+Alt+H',
            role: 'hideothers'
        }, {
            label: '显示全部',
            role: 'unhide'
        }, {
            type: 'separator'
        }, {
            label: '退出',
            accelerator: 'Command+Q',
            click: function () {
                app.quit()
            }
        }]
    })

    // 窗口菜单.
    template[3].submenu.push({
        type: 'separator'
    }, {
            label: '前置所有',
            role: 'front'
        })

    addUpdateMenuItems(template[0].submenu, 1)
}

if (process.platform === 'win32') {
    const helpMenu = template[template.length - 1].submenu
    addUpdateMenuItems(helpMenu, 0)
}

function addUpdateMenuItems(items, position) {
    if (process.mas) return

    const version = electron.app.getVersion()
    let updateItems = [{
        label: `Version ${version}`,
        enabled: false
    }, {
        label: '正在检查更新',
        enabled: false,
        key: 'checkingForUpdate'
    }, {
        label: '检查更新',
        visible: false,
        key: 'checkForUpdate',
        click: function () {
            require('electron').autoUpdater.checkForUpdates()
        }
    }, {
        label: '重启并安装更新',
        enabled: true,
        visible: false,
        key: 'restartToUpdate',
        click: function () {
            require('electron').autoUpdater.quitAndInstall()
        }
    },
    {
        label: '设置',
        accelerator: 'Command+,',
        click: function () {
            BrowserWindow.getFocusedWindow().loadURL('http://fap.wenshidata.com/settings')
        }
    }
    ]

    items.splice.apply(items, [position, 0].concat(updateItems))
}

module.exports = template;
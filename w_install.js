var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/WS-Project-Manager-win32-x64',
    outputDirectory: './build/installer64',
    authors: 'App Inc.',
    exe: 'WS-Project-Manager.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));


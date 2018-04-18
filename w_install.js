var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/M-win32-x64',
    outputDirectory: './build/installer64',
    authors: 'App Inc.',
    exe: 'M.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));


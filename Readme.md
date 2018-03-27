
mac
./node_modules/.bin/electron-packager . --icon=./assets/wslogo.icns --out=./build

windows


./node_modules/.bin/electron-packager . --icon=./assets/wslogo.ico --out=./build


dmg

./node_modules/.bin/electron-installer-dmg /Users/weston/electron打包/build/M-darwin-x64/M.app M

setup.exe

node .w_install.js

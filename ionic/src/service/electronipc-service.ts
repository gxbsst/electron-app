import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class ElectronIpcService {
  constructor(private electron: ElectronService) { }

  /**
   * Sends a list of addresses to the main process, to be 
   * updated on the Locations menu.
   */
  updateLocationsMenu() {
    if (this.electron.ipcRenderer) {
      this.electron.ipcRenderer.send('Locations');
    }
  }
}

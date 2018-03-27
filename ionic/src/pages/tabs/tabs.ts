import {Component, ViewChild} from '@angular/core';
import {HomePage} from '../home/home';
import {Tabs, Events} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;

  homeRoot: any = HomePage;

  constructor(public events: Events) {
  }

}

import { appRoutes } from './app.routes';
import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  routes;

  constructor() {
    this.routes = appRoutes;
  }

}

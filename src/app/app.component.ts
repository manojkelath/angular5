import { appRoutes } from './app.routes';
import { Component } from '@angular/core';
import { log } from 'util';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  routes;
  subscription: any;
  message: any;

  constructor(private messageService: MessageService) {
    this.routes = appRoutes;
    // this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    this.subscription = this.messageService.getMessage();
  }

}

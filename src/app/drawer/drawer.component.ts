import { MessageService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  message: any;
  subscription: any;
  ngOnInit() {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage();
  }

  constructor(private messageService: MessageService) {

  }

  // tslint:disable-next-line:use-life-cycle-interfa
}

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  incrementValue = 0;
  values = [0];
  message: string;

  constructor(private messageService: MessageService) {
    this.message = 'This is message from compoennt 1';
  }

  ngOnInit() {

  }

  sendMessage(message) {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(message);
  }

}

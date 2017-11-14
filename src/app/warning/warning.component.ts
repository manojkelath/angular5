import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

 incrementValue=0;
 values=[0];



  increment(){
    this.values.push(++this.incrementValue);
  }

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}

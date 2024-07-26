import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-alert',
  standalone: true,
  imports: [],
  templateUrl: './app-alert.component.html',
  styleUrl: './app-alert.component.css'
})
export class AppAlertComponent {
   @Input() message=""
   @Output() onBtnClick=new EventEmitter();

   onClick(){
    alert("from alert")
    this.onBtnClick.emit("aa")
   }
}

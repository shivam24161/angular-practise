import { Component } from '@angular/core';
import { AppAlertComponent } from "../app-alert/app-alert.component";

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [AppAlertComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export class InputOutputComponent {
  sendFromInput(a:any){
    alert(a)
  }
}

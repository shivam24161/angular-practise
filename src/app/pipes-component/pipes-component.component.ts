import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe],
  templateUrl: './pipes-component.component.html',
  styleUrl: './pipes-component.component.css'
})
export class PipesComponentComponent {
  description = "This is description , converting it to lowercase";
  text2 = "converting this text to uppercase";
}

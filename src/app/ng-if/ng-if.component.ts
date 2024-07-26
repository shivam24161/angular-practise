import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})

export class NgIfComponent {
  constructor(private router:Router){}
  enable1=false;
  enable2=false;
  divClass="div-container";
  obj=[
    {
      label:"name 1",
      value:"value 1"
    },
    {
      label:"name 2",
      value:"value 2"
    },
    {
      label:"name 3",
      value:"value 3"
    }
  ]
  containerStyle={
    'backgroundColor':'silver',
    'height':'30px'
  }
  enableDiv1(){
    this.enable1=!this.enable1
  }
  enableDiv2(){
    this.enable2=!this.enable2
  }
  navigateBack(){
    this.router.navigateByUrl("")
  }
}

import { Component, inject } from '@angular/core';
import { CarServiceService } from '../../service/car-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-injectable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './injectable.component.html',
  styleUrl: './injectable.component.css'
})
export class InjectableComponent {
  // Injecting service using injectable
  // carService=inject(CarServiceService)
    data:any=[];
  //  constructor(){
  //   this.data=this.carService.getCars()
  // }

  // Injecting service using constructor
  constructor(private carService:CarServiceService){
    this.data=carService.getCars()
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  carData=['Maruti Suzuki', 'Ola','Uber','Rapido','inDriver','Rensor'];
  getCars(){
    return this.carData;
  }
  getCarById(id:number){
    return this.carData[id]
  }
}

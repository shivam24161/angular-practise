import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api-component',
  standalone: true,
  imports: [],
  templateUrl: './get-api-component.component.html',
  styleUrl: './get-api-component.component.css'
})
export class GetApiComponentComponent {
  // http = inject(HttpClient)
  userList=[];
  customerList=[];
  constructor(private http:HttpClient){
    this.getAllTrain()
  }
  getAllTrain(){
    this.http.get("https://freeapi.gerasim.in/api/TrainApp/GetAllStations").subscribe((res:any)=>{
      this.userList = res
    })
  }
  getAllUser(){
    this.http.get("https://projectapi.gerasim.in/api/OnlineLearning/GetAllUsers").subscribe((res:any)=>{
      this.userList = res
    })
  }
  getAllCustomer(){
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
      this.customerList = res
    })
  }
}

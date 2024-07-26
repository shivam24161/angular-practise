import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  constructor(private http:HttpClient){
  }
  obj:any={
    "departmentId": 0,
    "departmentName": "string",
    "departmentLogo": "string"
  }
  ngOnInit(){
    // this.addDepartment()
  }
  addDepartment(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.obj).subscribe((res:any)=>{
      if(res.success){
        alert("added")
      }
    })
  }
  deleteDepartment(){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId="+1).subscribe((res:any)=>{
      if(res.result){
        alert("delete successfully")
      }
    })
  }
}

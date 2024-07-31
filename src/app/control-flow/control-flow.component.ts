import { Component } from '@angular/core';
import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})

export class ControlFlowComponent {
  showDiv1 = true;
  showDiv2 = true;
  dayNumber=1;
  constructor(private getGlobal:UtilityService){
    this.getGlobal.getGloalObsValue.subscribe((res:any)=>{
      console.log(res,"control flow behavior sub")
    })
  }
  objData=[
    {
      label:"label 1",
      value:"value 1"
    },
    {
      label:"label 2",
      value:"value 2"
    }
  ]
  hide1(){
    this.showDiv1 = !this.showDiv1
    console.log("first 1",this.showDiv1)
  }
  hide2(){
    this.showDiv2 = !this.showDiv2
    console.log("first 2",this.showDiv2)
  }
}

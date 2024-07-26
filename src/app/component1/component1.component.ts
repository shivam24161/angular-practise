import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
   componentName= "component1";
   signalVar = signal("abcd")
   city = "Lucknow";
   inputText="intial";   
   callMe(a:any){
     this.signalVar.set(a)
     console.log(a, this.inputText,this.signalVar());
   }   
}

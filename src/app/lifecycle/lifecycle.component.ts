import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent{
  textContent="";
  constructor(){
    console.log("Inside constructor");
  }
  ngOnInit(){
    console.log("inside ngonit");
    this.textContent="abcd";
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ng do check")
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  afterNextRender(){
    console.log("afterNextRender");
  }
  afterRender(){
    console.log("after render")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
}
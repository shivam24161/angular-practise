import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  public getGloalValue:Subject<number> = new Subject();
  public getGloalObsValue:BehaviorSubject<number> = new BehaviorSubject<number>(1);
}

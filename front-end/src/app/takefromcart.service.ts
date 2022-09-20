import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakefromcartService {
  subject = new Subject();
  constructor() {}
  sendMsg(cartTotal: any){
    this.subject.next(cartTotal) // Triggering an event
  }

  getMsg(){
    return this.subject.asObservable()
  }
}

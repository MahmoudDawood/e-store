import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './Models/product';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  subject = new Subject()
  constructor() { }
  sendMsg(product: Product){
    this.subject.next(product) // Triggering an event
  }
  
  getMsg(){
    return this.subject.asObservable()
  }
}

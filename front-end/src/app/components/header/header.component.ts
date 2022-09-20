import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _name!:string;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
   
  }
  filterByCategory(event:Event):void{
    this.product.category = (event.target as HTMLInputElement).value;
    console.log((event.target as HTMLInputElement).value);
    this.product.changeCategory((event.target as HTMLInputElement).value);
    
  }

  set name(name:string){
    this._name = name;
    this.search(name);
  }

  search(name:string):void{
    // this.product.name = name;
    this.product.changeName(name);
    // console.log(name);
    
  }

}

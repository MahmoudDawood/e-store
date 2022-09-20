import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessangerService } from 'src/app/messanger.service';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  @Input() productItem!: Product
  constructor(private productService:ProductService,private msg: MessangerService) { }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(next:(prods)=>{
    //   this.products=prods;
    // })
  this.productService.getProducts().subscribe(data=>{
    this.products=data;
    // console.log(data);
    });
    this.productService.observe().subscribe((category:any) => {this.productService.getProducts(category).subscribe(data => this.products = data)});
    this.productService.observeName().subscribe((name:any) => {this.productService.search(name).subscribe(data =>{ this.products = data; console.log(data)})});

  }
  addToCart(id:number):void{
    this.productService.addToCart(id).subscribe((data) => {console.log(data);
    });
    this.productService.changelen();
  }

}

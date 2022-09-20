import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() id!: any;
  p:any;
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getSingleProduct(this.id).subscribe(data=>{
      this.p=data;
    });
  }
}

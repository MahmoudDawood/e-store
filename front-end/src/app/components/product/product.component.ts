import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:any;
  product:any;
  constructor(private productService:ProductService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id");
    // console.log(id);
    this.productService.getSingleProduct(this.id).subscribe(data=>{
      this.product=data;
      console.log(this.product);
    })
    
  }

}

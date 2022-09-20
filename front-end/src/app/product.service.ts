// import { Injectable } from '@angular/core';
// import {HttpClient, HttpClientModule} from '@angular/common/http'
// import { Product } from './Models/product';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   products:any;
//   // products:Product[]=[{id:100,name:'camera',image:'./../../../assets/img/shop02.png',category:'electronics',description:'Taking photos and making memories',price:1000,stock:10}]
//   constructor(private Myhttp: HttpClient) {}

//   // to fetch products from Database 
//  getAllProducts():Observable<any>/*Observable<Product>*/{
//   // console.log(this.Myhttp.get("localhost:3000/products"));
//     //  return this.Myhttp.get<Product>("localhost:3000/products");  /*for connecting with backend*/
//     this.products=this.Myhttp.get(`http://localhost:3000/products`);    
//     return this.products;
//  }

//  // getting single product
//  getSingleProduct(id:string):Observable<any> /*Observable<Product>*/ {
//   return this.Myhttp.get(`http://localhost:3000/products/${id}`);
// }

// //getting product by category
// // getProductByCat(cat:string):Product /*Observable<Product>*/{
// // // return this.Myhttp.get<Product>(`http://localhost:3000/products/category/${cat}`); /*for connecting with backend*/
// //   return this.products[0];
// // }

// }
import { Injectable } from '@angular/core';
// import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //POPULATE IT FROM DATABASE
  // products:Product[] = [
  //   new Product(2, "Bag", "Bags", "This is a cool bag", 3247, 23)
  // ]

  category:string="";
  user!:any;
  userId="6328daa69f53157508c06efd";
  subject = new Subject();
  name!:string;
  nameSubject = new Subject();
  constructor(private Http: HttpClient) { 
    this.subject.next(this.category)
  }

  addToCart(id:any):void{
    console.log(id);
    this.Http.post(`http://localhost:3000/cart/${this.userId}/${id}`, id);
  }

  changeCategory(cate:string){
    this.category = cate;
    this.subject.next(this.category)
  }

  getCart():Observable<any>{
    return this.Http.get(`http://localhost:3000/cart/${this.userId}`)
  }

  observe(){
    return this.subject.asObservable();
  }

  changeName(name:string){
    this.name = name;
    this.nameSubject.next(this.name);
  }

  observeName(){
    
    return this.nameSubject.asObservable();
  }


  getProducts(category:string = ''): Observable<any>{
    //TODO: Populate products from database and return an Observable
    // console.log(1);
    if(category == '' || category == 'all'){
      return this.Http.get("http://localhost:3000/products");
    }
    else{
      return this.Http.get(`http://localhost:3000/products/${category}`);
    }
  }

  search(name:string):Observable<any>{
    if(name == ''){
      return this.Http.get("http://localhost:3000/products");
    }
    return this.Http.get(`http://localhost:3000/products/search/${name}`);
    
    
  }

  // getting single product
  getSingleProduct(id:string):Observable<any> /*Observable<Product>*/ {
    return this.Http.get(`http://localhost:3000/products/${id}`);
  }

}

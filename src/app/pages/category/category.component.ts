import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'app-category',
  templateUrl:'./category.component.html',
})
export class CategoryComponent{
  products:any = [];
  limit:number=5;
  constructor(private http:HttpClient) {
  }
  ngOnInit(){
    this.getProduct();
  }
  /// call API: https://dummyjson.com/products/ + this.id
  getProduct(){
    // call api
    const url = 'https://dummyjson.com/products?limit='+this.limit;
    this.http.get<any>(url).subscribe(data=>{
      //set data to product
      this.products = data.products;
    })
  }
  loadMore(){
    this.limit+=10;
    this.getProduct();
  }
}

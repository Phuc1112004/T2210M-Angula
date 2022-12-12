import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'app-product',
  templateUrl:'./product.component.html',
  styleUrls:['./product.component.css']
})
export class ProductComponent{
  id: number=1;
  product:any={
    id:1,
    title:'iphone 9',
    price:549,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
  }
  constructor(private route:ActivatedRoute, private http:HttpClient) {
  }
  ngOnInit(){              // tự động chạy khi làm xong giao diện
   this.route.params.subscribe(params=>{
     this.id = params['id'];
     this.getproduct();
   })
  }
  /// call API: https://dummyjson.com/products/ + this.id
  getproduct(){
    // call api
    const url = 'https://dummyjson.com/products/'+ this.id
    this.http.get<any>(url).subscribe(data=>{
      //set data to product
      this.product = data;
    })
  }
}



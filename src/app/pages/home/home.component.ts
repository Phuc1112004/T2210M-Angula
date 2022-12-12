import {Component} from "@angular/core";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent{
  className: string='t2210m';
  numberOfStudents=2;
  textColor = 'text-primary';
  categories: string[] = [
    'Fashion','Watch','Shoes','Diamaond'
  ];

  product:any = {
    id:1,
    name:'iphon 14 pro max',
    price:2900000,
    qty:10
  };

  products: any =[
    {
      id:2,
      name:'iphon 14 pro max',
      price:2900000,
      qty:10
    },
    {
      id:3,
    name:'iphon 13 pro max',
    price:2500000,
    qty :0
    },
    {
      id:4,
    name:'iphon 12 pro max',
    price:2100000,
    qty :5
    },
    {
    name:'iphon 11 pro max',
    price:1700000,
    qty :15
    },
  ];

  addStudent(){
    this.numberOfStudents++;
      this.textColor='text-primary';
  }

  remove(){
    if (this.numberOfStudents>0)
      this.numberOfStudents--;

    if (this.numberOfStudents==0)
      this.textColor='text-danger';
  }
}

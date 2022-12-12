import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassesComponent} from "./classes/classes.component";
import {HomeComponent} from "./pages/home/home.component";
import {CategoryComponent} from "./pages/category/category.component";
import {ProductComponent} from "./pages/product/product.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {HttpClientModule} from "@angular/common/http";
import {CategoriesComponent} from "./pages/categories/categories.component";

// khai báo danh sách routing
const appRoutes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'category',component: CategoryComponent },
  { path: 'product/:id',component: ProductComponent },
  { path: 'login',component:LoginComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'categories',component:CategoriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,ClassesComponent,StudentComponent,HomeComponent,CategoryComponent,
    ProductComponent,LoginComponent,RegisterComponent,CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),       //  gọi appRoutes vào
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

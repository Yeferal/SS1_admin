import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ChartsComponent } from './components/charts/charts.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { HomeComponent } from './components/home/home.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EnterGuard } from './guards/enter.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, canActivate: [EnterGuard]},
  {path: 'login', component: LoginComponent, canActivate: [EnterGuard]},
  {path: 'home', component: HomeComponent, canActivate: [LogoutGuard]},
  {path: 'list-orders', component: ListOrdersComponent, canActivate: [LogoutGuard]},
  {path: 'list-products', component: ListProductsComponent, canActivate: [LogoutGuard]},
  {path: 'list-products/add-product', component: AddProductComponent, canActivate: [LogoutGuard]},
  {path: 'list-products/edit-product/:id_producto', component: EditProductComponent, canActivate: [LogoutGuard]},
  {path: 'list-users', component: ListUsersComponent, canActivate: [LogoutGuard]},
  {path: 'charts', component: ChartsComponent, canActivate: [LogoutGuard]},
  // {path: '', component: },
  // {path: '', component: },
  // {path: '', component: },
  // {path: '', component: },
  // {path: '', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

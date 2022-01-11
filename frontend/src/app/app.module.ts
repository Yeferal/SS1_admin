import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

//INIT SERVICES
import { LoadScriptsService } from './services/load-scripts.service';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ChartsComponent } from './components/charts/charts.component';
import { LogsComponent } from './components/logs/logs.component';
import { TableListProductsComponent } from './components/list-products/table-list-products/table-list-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBaseComponent } from './components/tools/modal-base/modal-base.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
//END SERVICES

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPassComponent,
    NavbarComponent,
    TopbarComponent,
    ListProductsComponent,
    ListOrdersComponent,
    ListUsersComponent,
    ChartsComponent,
    LogsComponent,
    TableListProductsComponent,
    AddProductComponent,
    ModalBaseComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule, 
    AppRoutingModule, NgbModule
  ],
  providers: [
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

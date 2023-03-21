import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './card/card.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
 import { DashbordComponent } from './dashbord/dashbord.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
    ViewCustomerComponent,
    DashboardCustomerComponent,
    DetailsCustomerComponent,
    NotFoundedComponent,
    NavigationComponent,
    CardComponent,
    DashbordComponent,
    AddCustomerComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

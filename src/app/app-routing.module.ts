import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
// import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  {
    path:'view',
    component : ViewCustomerComponent
  },
  {
    path: '',
    component: DashbordComponent
  },
  {
    path :'view/edit/:id',
    redirectTo:"edit/:id"
  },
  {
    path: 'details/:id/edit/:id',
    redirectTo : "edit/:id"
  },
  {
    path: 'view/details/:id',
    redirectTo : "details/:id"
  },
  {
    path: 'edit/:id',
    component: EditItemComponent
  },
  {
     path: 'create',
     component: AddCustomerComponent,
  },
  {
    path:'details/:id',
    component : DetailsCustomerComponent
  },
  {
    path:'**',
    component: NotFoundedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
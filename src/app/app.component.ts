import { Component } from '@angular/core';
import { customer } from './Models/customer.model';
import { CustomerService } from './customer.service';
import { customers } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  // customers : customer[] = customers;
  // title = 'Bank';
  // constructor(private customerService: CustomerService){
  // }

  // delete(customer: customer) {
  //   console.log("pere")
  //   // this.setIsLoading(customer, true);
  //   this.customerService.deleteCustomer(customer).subscribe(() => {
  //     this.customers = this.customers.filter((p) => p.id !== customer.id);
  //     // this.setIsLoading(customer, false);
  //   });
  // }

}

import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { customer } from '../Models/customer.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {
    
  

  // constructor( private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {

   
  // }

  //  submit() {
  //   // this.isLoading = true;
  //   // console.log("submit, ", this.customerForm.value)
  //   // this.customerService
  //   //    .createCustomer(this.customerForm.value)
  //   //     .subscribe((customer: customer) => {
  //   //     this.isLoading = false;
  //   //     this.customerForm.reset();
  //   //     this.router.navigate(['/details', customer.id]);
  //   //   });
   

  // }

  // getControl(controlName: string) {
  //   // return this.customerForm.get(controlName);
  // }

 

}

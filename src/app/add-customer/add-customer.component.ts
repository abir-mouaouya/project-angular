import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { customer } from '../Models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
 
  customerForm: FormGroup;
  isLoading = false;
  @Input() gender: string = "Male";
  @Input() typeAccount: string ="Savings Accounts"
  constructor( private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {

    this.customerForm = this.formBuilder.group({
      id:[
        "",
      ],
      firstName: [
        '',
        [
          Validators.required,
        ]
        // [this.validateName.bind(this)],
      ],
      lastName: [
        '',
        [
          Validators.required,
        ],
      ],
      address: [
        '',
        [
          Validators.required,
        ]
      ],
      gender: [
        '',
        [
          Validators.required,
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]
      ],
      email: [
        '',
        [
          Validators.required,
        ]
      ],
      typeAccount: [
        '',
        [
          Validators.required,
        ]
      ],
      balance: [
        0,
        [
          Validators.required,
        ]
      ],
    });
  }

   submit() {
    this.isLoading = true;
    console.log("submit, ", this.customerForm.value)
    this.customerService
       .createCustomer(this.customerForm.value)
        .subscribe((customer: customer) => {
        this.isLoading = false;
        this.customerForm.reset();
        this.router.navigate(['/details', customer.id]);
      });
   

  }

  getControl(controlName: string) {
    return this.customerForm.get(controlName);
  }
}

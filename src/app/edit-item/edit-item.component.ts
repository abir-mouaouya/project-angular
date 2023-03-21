import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomerService } from '../customer.service';
import { customer } from '../Models/customer.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  customerForm: FormGroup;
  customers? : customer[];
  constructor( private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router, private activeRoute : ActivatedRoute) {

    this.customerForm = this.formBuilder.group({
      id:[

      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]
        // [this.validateName.bind(this)],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200),
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
  ngOnInit(): void {
   
    console.log("I am in Edit ");
    this.customerService.getById(this.activeRoute.snapshot.params['id']).subscribe((customer)=>{
      this.customerForm = this.formBuilder.group({
        id:[
             customer.id,
        ],
        firstName: [
          customer?.firstName,
          [
            Validators.required,
          ]
        ],
        lastName: [
          customer?.lastName,
          [
            Validators.required,
          ],
        ],
        address: [
          customer?.address,
          [
            Validators.required,
          ]
        ],
        gender: [
          customer?.gender,
          [
            Validators.required,
          ]
        ],
        phone: [
          customer?.phone,
          [
            Validators.required,
            Validators.maxLength(10),
          ]
        ],
        email: [
          customer?.email,
          [
            Validators.required,
          ]
        ],
        typeAccount: [
          customer?.typeAccount,
          [
            Validators.required,
          ]
        ],
        balance: [
          customer?.balance,
          [
            Validators.required,
          ]
        ],
      });

    }    
    )
   
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
   });
  }
 
  

  save(){
   console.log(this.customerForm.value);
  this.customerService.updateCustomer({...this.customerForm.value}).subscribe((updated)=>{
     this.customers = this.customers?.map((c) => {
         if(c.id === updated.id ){
           return updated;
         }
         return c;
     })
  })

  this.router.navigate(['details',this.customerForm.value.id])
  }

}

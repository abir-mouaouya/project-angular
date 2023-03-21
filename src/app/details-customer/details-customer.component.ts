import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomerService } from '../customer.service';
import { customer } from '../Models/customer.model';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.scss']
})
export class DetailsCustomerComponent implements OnInit {
  customer? : customer;
  constructor(private customerService: CustomerService, private router : Router, private activeRoute : ActivatedRoute){
  }

  ngOnInit(): void {
    console.log(" I'm in detail");
    this.activeRoute.params
    .pipe(switchMap((params) => this.customerService.getById(params['id'])))
    .subscribe({
      next: (customer) => (this.customer = customer),
      error: () => {
        this.router.navigate(['/not-found']);
      },
    });   
  }

  edit(){
    
  this.router.navigate(['details',this.customer?.id])
  
  }

   delete(){
    this.router.navigate(['delete', this.customer?.id])
   }

}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { customers } from '../data';
import { customer } from '../Models/customer.model';


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit , OnDestroy{
  customers : customer[]=[] ; 
   @Input() filterVal :string="";
  searchQuerySubject = new Subject<string>();
  constructor( private customerService : CustomerService){
    this.searchQuerySubject
    .pipe(debounceTime(500), distinctUntilChanged())
    .subscribe((query: string) => {
      this.search(query);
    });
  }
  ngOnDestroy(): void {
   
  }
  
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
       this.customers = customers;    
    });
    console.log("here");
  }


  delete(customer: customer) {
    console.log("here")
    this.customerService.deleteCustomer(customer).subscribe(() => {
      this.customers = this.customers.filter((p) => p.id !== customer.id);
    });
  }
  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }
  
  search(query: string) {
    this.customerService.search(query).subscribe((customers) => {
      this.customers = customers;
    });
  }
  
  filter(){
    console.log("gnedr", this.filterVal)
    this.customers = this.customers.filter( c => {
      return (c.gender == this.filterVal)
    })
  }
  
}

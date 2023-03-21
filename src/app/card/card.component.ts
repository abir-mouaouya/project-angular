import { Component, EventEmitter, Input, Output } from '@angular/core';
import { customer } from '../Models/customer.model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() customer? : customer;
@Output() delete = new EventEmitter<customer>();
@Output() update = new EventEmitter<customer>();
constructor( private customerService : CustomerService ){
}

deleteItem(){
  console.log("delete");
  this.delete.emit(this.customer);
  console.log("deleteEvnet");
}




}
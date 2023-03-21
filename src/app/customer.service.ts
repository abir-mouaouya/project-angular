import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from './Models/customer.model';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';
const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  getCustomers(): Observable<customer[]> {
    return this.http.get<customer[]>(API_URL);
  }

  updateCustomer(Customer: customer): Observable<customer> {
    return this.http.put<customer>(`${API_URL}/${Customer.id}`, Customer);
  }

  deleteCustomer(Customer: customer) {
    return this.http.delete(`${API_URL}/${Customer.id}`);
  }

  search(firstName: string): Observable<customer[]> {
    return this.http.get<customer[]>(`${API_URL}?q=${firstName}`);
  }

  getById(id?: string): Observable<customer> {
    return this.http.get<customer>(`${API_URL}/${id}`);
  }

  createCustomer(CustomerFormData: FormData): Observable<customer> {
    const newCustomer = {...CustomerFormData,  id: UUID};
    return this.http.post<customer>(API_URL, newCustomer);
  }

  getCustomerByEmail(name: string): Observable<customer[]> {
    return this.http.get<customer[]>(`${API_URL}?name=${name}`);
  }


}

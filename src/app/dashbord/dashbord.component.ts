import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { customer } from '../Models/customer.model';
import {Chart} from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  customers : customer[]=[] ;
  NbCustomers: number =0;
  TotalBalance : number =0;
  maleCustomer : number =0;
  femaleCustomer : number =0;
  NbSavings: number =0;
  NbChecking: number =0;
  NbMoney: number =0;
  NbCertificates: number =0;
  balanceSavings: number =0;
  balanceChecking: number =0;
  balanceMoney: number =0;
  balanceCertificates: number =100000;
  chart=[];
  
  constructor( private customerService : CustomerService){}

  
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
    this.customers = customers;    
    this.NbCustomers = this.calculCustomers();
    this.TotalBalance = this.calculBalance();    
    this.calcul(); 

    console.log( "femaleCustomer",this.femaleCustomer )
   
   let data = {
      labels: [
        'Female',
        'Male'
      ],
      datasets: [{
        label: 'Male Female',
        data: [this.femaleCustomer, this.maleCustomer],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ]
      }]
    };
    var myChart = new Chart("myChart",  {type : "pie", data })
     data = {
      labels: [
        'saving',
        'Cheking',
        'Money Market Accounts',
        'Certificates of Deposit'
      ],
      datasets: [{
        label: 'Account type',
        data: [this.NbSavings, this.NbChecking, this.NbMoney,this.NbCertificates],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 2)',
          'rgb(25, 99, 132)',
        ]
      }]
    };
    var maleFemale = new Chart("Male-FemaleChart", {type: "pie", data});

    data = {
      labels: [
        'saving',
        'Cheking',
        'Money Market Accounts',
        'Certificates of Deposit'
      ],
      datasets: [{
        label: 'Balance',
        data: [this.balanceSavings, this.balanceChecking, this.balanceMoney,this.balanceCertificates],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 2)',
          'rgb(25, 99, 132)',
        ]
      }]
    };
    var balance = new Chart("balance", {type: "bar", data});







    });
    


  }

  calculCustomers(){
    console.log("customers.length", this.customers.length)
    return  this.customers.length;
  }
  
  calculBalance(){
     var sum =0;
     for(var c in this.customers){
       sum+= this.customers[c].balance;
     }
     console.log("sum balance ", sum);
     return sum;    
  }
calcul(){
     let sum=0;
    this.NbSavings = this.customers.filter( s => { 
      return (s.typeAccount == "Savings Accounts")}).length;

    this.NbChecking =this.customers.filter( s => { 
      return  (s.typeAccount == "Checking Accounts")
  }).length;

  this.NbMoney = this.customers.filter( s => { 
     return( s.typeAccount == "Money Market Accounts")}).length;

  this.NbCertificates = this.customers.filter( s => { 
    return( s.typeAccount == "Certificates of Deposit")}).length;  
this.femaleCustomer = this.customers.filter( (s) => { 
  return (s.gender=="Female"); }).length;
this.maleCustomer= this.customers.filter( (s )=> { 
        return (s.gender=="Male"); } ).length;

   for(var c in this.customers){
     if(this.customers[c].typeAccount =="Certificates of Deposit" )
          this.balanceCertificates+=this.customers[c].balance;
     else{
        if(this.customers[c].typeAccount =="Money Market Accounts" )
          this.balanceMoney+=this.customers[c].balance;
        else{
            if(this.customers[c].typeAccount =="Savings Accounts")
                  this.balanceSavings+=this.customers[c].balance;
            else { 
               if(this.customers[c].typeAccount =="Checking Accounts")
                      this.balanceChecking+=this.customers[c].balance;
                      
            }
        }  
     }
   }
  }

}

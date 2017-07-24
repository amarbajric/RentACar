import {Component} from '@angular/core';
import {CustomerLoginService} from "../services/customer-service/customer-login.service";
import {Customer} from "../entities/customer";
import {CustomerService} from "../services/customer-service/customer.service";
import {Router} from "@angular/router";


@Component({
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {

  customerInfo: Customer;

  constructor(private customerLoginService: CustomerLoginService,private customerService:CustomerService,private router:Router) {

  }

  ngOnInit(){
    this.customerInfo = this.customerLoginService.getUserInfos();
    this.customerInfo.birthDate = this.convertDate(this.customerInfo.birthDate);
  }


  convertDate(date:string){
    return date.slice(6,10) + "-" + date.slice(3,5) + "-" + date.slice(0,2);
  }



  editCustomer(){
    this.customerService.updateCustomer(this.customerInfo)
      .subscribe((resp) => {
        this.customerLoginService.refreshCustomerData(this.customerInfo.email).then((resp) => {
          this.router.navigateByUrl('/home');
        });

      });
  }




}
